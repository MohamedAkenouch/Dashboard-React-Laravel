<?php


namespace Modules\Category\DTO;

use App\DTO\DTOCaster;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Modules\Branch\Entities\Branch;
use Modules\Category\Entities\Category;
use Modules\Category\Entities\CategoryImage;
use Modules\Product\DTO\ProductData;
use Spatie\DataTransferObject\DataTransferObject;
use function Symfony\Component\String\s;

class CategoryData extends DataTransferObject
{
    public $id;

    public $name;
    public $name_ar;
    public $name_en;

    public $level;
    public $icon;

    public $parent_id;

    public $is_quick_access;

    public $images;
    public $image;

    public $products;


    /**
     * @param Category $category
     * @return CategoryData|DataTransferObject
     */
    public static function fromModel(Category $category)
    {
        // dd($category);
        $data = [
            'id' => (int) $category->id,
            'name' => (string) $category->translate()->name,
            'level' => (int) $category->level,
            'icon' => $category->icon ? Storage::disk('public')->url($category->icon) : null,
            'parent_id' => $category->parent_id ? (int) $category->parent_id : null,
            'is_quick_access' => (bool) $category->is_quick_access,
           'images' => DTOCaster::cast($category->images, CategoryImageData::class),
           'image' =>  CategoryImageData::toArrayImages($category->images),
            // 'image' =>  $category->images ?
            //     Storage::disk('public')->
            //     url($category->images->first()->image):
            //     null,
            'products' =>
             $category->relationLoaded('products') ?
                DTOCaster::cast($category->products, ProductData::class)
                :null,

        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }

    public static function fromRequest(Request $request)
    {
        $from_data = $request->validated();

        $data = [
            'name_ar' => $from_data['name_ar'] ?? null,
            'name_en' => $from_data['name_en'] ?? null,
            'icon' => $from_data['icon'] ?? null,
            'parent_id' => $from_data['parent_id'] ?? null,
//            'images' => $from_data['images'] ?? null,
            'image' => $from_data['image'] ?? null,
        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }
}
