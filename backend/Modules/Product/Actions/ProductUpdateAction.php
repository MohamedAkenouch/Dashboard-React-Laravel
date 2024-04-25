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
use Modules\Product\Entities\Product;
use Modules\Product\Entities\ProductImage;

class ProductUpdateAction
{
    use ImageSaver;

    /**
     * @param ProductData $data
     * @param Product $product
     */
    public static function execute(ProductData $data, Product $product)
    {
        $arr_data = $data->toArray();

        $arr_data += [
            'ar' => [
                'name' => $arr_data['name_ar'],
            ],
            'en' => [
                'name' => $arr_data['name_en'],
            ],
        ];

        $product->update($arr_data);

        return $product;
    }

}
