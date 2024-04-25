<?php


namespace App\Traits;


use Exception;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Support\Facades\URL;
use Rolandstarke\Thumbnail\Facades\Thumbnail;


trait ImageSaver
{
    /**
     * @throws Exception
     */
    public static function SaveImageWithSmartCrop($image, $dir_name, $entity_name, array $resolutions = [], $save_orginal = true )
    {
        $image_name = $entity_name.'.'.$image->getClientOriginalExtension();
        $dir_path = Storage::disk('public')->path($dir_name);
        $original_relative_image_path = $dir_name.'/'.$image_name;
        $absolute_path = $dir_path.'/'.$image_name;
        if(!File::exists($dir_path))
            File::makeDirectory($dir_path);

        $data = ['image' => $image];

        $base64 = Validator::make($data,[
            'image' => 'string', 'base64mimetypes:jpg,png,jpeg,webp'
        ]);
        $file = Validator::make($data,[
            'image' => 'file'
        ]);

        if ($base64->passes()) {
            $image = Image::make($base64->valid()['image']);
        }elseif ($file->passes()){
            $image = Image::make($file->valid()['image']);
        }

        $image->save($absolute_path);


        /////////  source image saved.. cropping image started


        $width = $image->width();
        $height = $image->height();
        $min_edge = min($width,$height);


        $source_path = Storage::disk('public')->path($dir_name.'/'.$image_name);

        $cropped_dir_name = $dir_name.'_cropped';
        $cropped_image = Thumbnail::src($source_path)
            ->destPath($cropped_dir_name,$entity_name)
            ->smartcrop($min_edge,$min_edge)
            ->save();

        $thumbs = [];
        $thumbs[] = $cropped_dir_name.'/'.$cropped_image->getName();

        $cropped_relative_image_path = $cropped_dir_name.'/'.$cropped_image->getName();

        /////////  cropped image saved.. creating thumbnails started


        $dir_name = $dir_name.'_thumbs';
        $dir_path = Storage::disk('public')->path($dir_name);

        if(!File::exists($dir_path))
            File::makeDirectory($dir_path);

        foreach ($resolutions as $resolution)
        {
            if($resolution > 100)
            {
                $image = Image::make($cropped_image->getPath());
                $image->fit($resolution,$resolution);
                $thumb_name = str_replace('.'.$image->getClientOriginalExtension(),"_$resolution.".$image->getClientOriginalExtension(),$image_name);
                $image->save("$dir_path/$thumb_name");
                $thumbs["$resolution"] = "$dir_name/$thumb_name";
            }
        }

        if(!$save_orginal)
        {
            Storage::disk('public')->delete("$cropped_relative_image_path");
            Storage::disk('public')->delete("$original_relative_image_path");
            unset($thumbs[0]);
        }
        return $thumbs;


    }

    public static function SaveImageWithoutCrop($image, $dir_name, $entity_name, array $resolutions = [], $save_orginal = true )
    {
        $entity_name = str_replace(
            [' ','/','\\','*','-','!','@','#','$','%','^','&'],
            '_',
            $entity_name
        );

        $n = $image->getClientOriginalExtension();

        $image_name = $entity_name.'.'.$n;

        $dir_path = Storage::disk('public')->path($dir_name);
        $original_relative_image_path = $dir_name.'/'.$image_name;
        $absolute_path = $dir_path.'/'.$image_name;
        if(!File::exists($dir_path))
            File::makeDirectory($dir_path);

        $data = ['image' => $image];

        $base64 = Validator::make($data,[
            'image' => 'string', 'base64mimetypes:jpg,png,jpeg'
        ]);
        $file = Validator::make($data,[
            'image' => 'file'
        ]);

        if ($base64->passes()) {
            $image = Image::make($base64->valid()['image']);
        }elseif ($file->passes()){

            $image = Image::make($file->valid()['image']);
        }

        $image->save($absolute_path);

        $thumbs = [];
        $thumbs[] = "$dir_name/$image_name";

        $dir_name = $dir_name.'_thumbs';
        $dir_path = Storage::disk('public')->path($dir_name);

        if(!File::exists($dir_path))
            File::makeDirectory($dir_path);

        foreach ($resolutions as $resolution)
        {
            if($resolution > 100)
            {
                $dimensions = self::getDimensions($image->width(), $image->height(), $resolution);
                $image = Image::make($absolute_path);
                $image->fit($dimensions['width'], $dimensions['height']);
                $thumb_name = str_replace('.'.$n,"_$resolution.".$n,$image_name);
                $image->save("$dir_path/$thumb_name");
                $thumbs["$resolution"] = "$dir_name/$thumb_name";
            }
        }

        if(!$save_orginal)
        {
            Storage::disk('public')->delete($original_relative_image_path);
            unset($thumbs[0]);
        }
        return $thumbs;

    }

    public static function DeleteImage(array $images = [])
    {
        foreach ($images as $image)
        {
            Storage::disk('public')->delete($image);
        }
    }

    public static function getDimensions($width, $height, $resolution)
    {
        $dimensions = [];
        $aspect_ratio = max($height,$width) / min($height,$width);
        if($width>=$height)
        {
            $dimensions['width'] = (int)($resolution * $aspect_ratio);
            $dimensions['height'] = (int)$resolution;
        }else{
            $dimensions['width'] = (int)$resolution;
            $dimensions['height'] = (int)($resolution *  $aspect_ratio);
        }
        return $dimensions;
    }

}
