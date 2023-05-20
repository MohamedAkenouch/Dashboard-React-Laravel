<?php


namespace Modules\Product\DTO;

use App\DTO\DTOCaster;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Modules\Banner\Entities\Banner;
use Modules\Branch\Entities\Branch;
use Modules\Category\DTO\CategoryData;
use Modules\Feature\DTO\FeatureData;
use Modules\Feature\Entities\Feature;
use Modules\Message\Entities\InboxMessage;
use Modules\Product\Entities\Product;
use Spatie\DataTransferObject\DataTransferObject;

class ProductData extends DataTransferObject
{
    public $id;

    public $name;
    public $view;
    public $name_ar;

    public $name_en;

    public $favorite;

    public $features;
    public $feature_values;

    public $description;

    public $price;

    public $images;

    public $product_related;

    public $categories;
    public $category_id;

    public $feature;
    public $feature_id;


    /**
     * @param Product $product
     * @return ProductData|DataTransferObject
     */
    public static function fromModel(Product $product)
    {

        $data = [
            'id' => (int) $product->id,
            'view' => (int) $product->view,
            'name' => (string) $product->translate()?->name,
            'name_en' => (string) $product->translate('en')?->name,
            'name_ar' => (string) $product->translate('ar')?->name,
            'favorite' => (bool) $product->favorite,
            'description' => (string) $product->description,
            'price' => (double) $product->price,
            'categories' =>
            //  $product->relationLoaded('categories') ?
                DTOCaster::cast($product->categories, CategoryData::class) ,
                // :
                // null
                
            'images' => DTOCaster::cast($product->images, ProductImageData::class),
            'features' => //$product->relationLoaded('features') ?
                DTOCaster::cast($product->selected_features, FeatureData::class, 'fromSelected'),
                // :
                // null,
            'product_related' => DTOCaster::cast($product->product_related, ProductData::class)
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
            'description' => $from_data['description'] ?? null,
            'price' => $from_data['price'] ?? null,
            'images' => $from_data['images'] ?? null,
            'product_related' => $from_data['product_related'] ?? null,
            'feature_values' => $from_data['feature_values'] ?? null,
            'category_id' => $from_data['category_id'] ?? null,
            'feature_id' => $from_data['feature_id'] ?? null
        ];

        $dto = new static($data);
        $dto->onlyKeys = array_keys($data);

        return $dto;
    }
}
