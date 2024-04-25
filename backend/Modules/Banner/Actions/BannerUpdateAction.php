<?php


namespace Modules\Banner\Actions;


use App\Traits\ImageSaver;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Modules\Banner\DTO\BannerData;
use Modules\Banner\Entities\Banner;
use Modules\Branch\DTO\BranchData;
use Modules\Branch\Entities\Branch;

class BannerUpdateAction
{

    use ImageSaver;

    /**
     * @param BannerData $data
     * @param Banner $banner
     * @return Banner
     */
    public static function execute(BannerData $data, $id)
    {
        
        $banner = Banner::where('id',$id)->first();
        $arr_data = $data->toArray();

        if($arr_data['image'])
        {
            $thumbs = self::SaveImageWithoutCrop(
                $arr_data['image'],
                'banner_images',
                'banner' . '_' . uniqid(),
                [],
                true
            );

            unset($arr_data['image']);

            // $banner->update([
            //     'image' => 
            // ]);
            
            Banner::where('id',$id)->update([
                'image' => $thumbs[0]
            ]);

        }

        if(!is_null($arr_data['category_id']))
        {
            Banner::where('id',$id)->update(['category_id'=>$arr_data['category_id']]);
            unset($arr_data['category_id']);
        }

        if(!is_null($arr_data['text']))
        {
            Banner::where('id',$id)->update(['text'=>$arr_data['text']]);
            unset($arr_data['text']);
        }

        // $banner->update($arr_data);
        $banner = Banner::where('id',$id)->first();

        return $banner;
    }
}
