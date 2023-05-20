<?php


namespace Modules\Category\Actions;


use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Modules\Branch\DTO\BranchData;
use Modules\Branch\Entities\Branch;
use Modules\Category\DTO\CategoryData;
use Modules\Category\Entities\Category;

class CategoryStoreAction
{

    /**
     * @param CategoryData $data
     * @param Category $category
     */
    public static function execute(CategoryData $data)
    {

        $arr_data = $data->toArray();

        $category_name = str_replace(' ','_',$arr_data["name_en"]);

        if($arr_data['icon'])
        {
            $icon = Storage::disk('public')->putFileAs(
                'category_icons',
                $arr_data['icon'],
                $category_name . '.svg'
            );
        }

        $parent = Category::find($arr_data['parent_id']);

        $level = $parent ? $parent->level + 1 : 0;

        unset(
            $arr_data['icon'],
        );

        $arr_data += [
            'ar' => [
                'name' => $arr_data['name_ar']
            ],
            'en' => [
                'name' => $arr_data['name_en']
            ],
            'icon' => $icon ?? null,

            'level' => $level
        ];

        return Category::create($arr_data);
    }
}
