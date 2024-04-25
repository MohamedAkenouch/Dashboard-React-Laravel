<?php


namespace Modules\Product\Actions;


use App\Traits\ImageSaver;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Modules\Banner\DTO\BannerData;
use Modules\Banner\Entities\Banner;
use Modules\Branch\DTO\BranchData;
use Modules\Branch\Entities\Branch;
use Modules\Feature\DTO\FeatureData;
use Modules\Feature\Entities\Feature;
use Modules\Message\DTO\InboxMessageData;
use Modules\Message\DTO\MessageData;
use Modules\Message\Entities\InboxMessage;
use Modules\Message\Entities\Message;
use Modules\Product\DTO\ProductData;
use Modules\Product\DTO\ProductImageData;
use Modules\Product\Entities\FeatureProduct;
use Modules\Product\Entities\FeatureValueProduct;
use Modules\Product\Entities\Product;
use Modules\Product\Entities\ProductImage;

class FeatureValueProductStoreAction
{

    /**
     * @param ProductData $data
     * @param Product $product
     * @return mixed
     */
    public static function execute(ProductData $data, Product $product)
    {
        $arr_data = $data->toArray();

        $feature_values_product = [];

        foreach($arr_data['feature_values'] as $feature_values)
        {

            $feature_product = FeatureProduct::firstOrCreate([
                'feature_id' => $feature_values['feature_id'],
                'product_id' => $product->id
            ],[
                'feature_id' => $feature_values['feature_id'],
                'product_id' => $product->id
            ]);

            foreach($feature_values['value_ids'] as $value)
            {
                $feature_value_product = FeatureValueProduct::create([
                   'feature_product_id' => $feature_product->id,
                    'feature_value_id' => $value
                ]);
            }

            $feature_values_product[] = $feature_value_product;

        }

        return collect($feature_values_product);

    }

}
