<?php


namespace Modules\Category\Actions;


use Illuminate\Support\Facades\Storage;
use Modules\Category\DTO\CategoryData;
use Modules\Category\Entities\Category;
use Modules\Category\Actions\CategoryImageUpdateAction;

class CategoryUpdateAction
{
    public static function execute(CategoryData $data ,Category $category){

        $arr_data = $data->toArray();

        $category_name = str_replace(' ','_',$arr_data["name_en"]);

        if($arr_data["icon"])
        {
            $icon = Storage::disk('public')->putFileAs(
                'category_icons',
                $arr_data['icon'],
                $category_name . '.svg'
            );

            unset($arr_data['icon']);

            $category->update([
                'icon' => $icon
            ]);
        }

        $arr_data += [
            'en' => [
                'name' => $data->name_en
            ],
            'ar' => [
                'name' => $data->name_ar,
            ]
        ];

        $category->update($arr_data);

        return $category;



    }
}
