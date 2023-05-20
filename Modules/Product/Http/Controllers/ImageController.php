<?php

namespace Modules\Product\Http\Controllers;

use App\custom_filters\TranslateFilter;
use App\custom_filters\TranslateSort;
use App\DTO\DTOCaster;
use App\DTO\GetResponseData;
use App\DTO\GetResponsePaginationData;
use App\DTO\ResponseData;
use App\DTO\ResponsePaginationData;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Schema;
use Modules\Product\Actions\ProductImageStoreAction;
use Modules\Product\Actions\ProductImageUpdateAction;
use Modules\Product\Actions\ImageStoreAction;
use Modules\Product\Actions\ProductUpdateAction;
use Modules\Product\DTO\ProductData;
use Modules\Product\DTO\ProductImageData;
use Modules\Product\DTO\ImageData;
use Modules\Product\Entities\Product;
use Modules\Product\Entities\ProductImage;
use Modules\Product\Entities\ProductRelated;
use Modules\Product\Entities\FeatureProduct;
use Modules\Product\Entities\ProductTranslation;
use Modules\Product\Entities\CategoryProduct;
use Modules\Product\Http\Requests\ProductDeleteRequest;
use Modules\Product\Http\Requests\ProductIndexByCategoryRequest;
use Modules\Product\Http\Requests\ProductIndexRequest;
use Modules\Product\Http\Requests\ProductShowRequest;
use Modules\Product\Http\Requests\StoreImageRequest;
use Modules\Product\Http\Requests\ProductUpdateRequest;
use Modules\Product\Http\Requests\ToggleFavoriteRequest;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\AllowedSort;
use Spatie\QueryBuilder\QueryBuilder;

class ImageController extends Controller
{

    /**
     * Store a newly created resource in storage.
     * @param StoreImageRequest $request
     * @return ResponseData
     */
    public function store(StoreImageRequest $request)
    {
        $image_data = ImageData::fromRequest($request);

        $product_id = $image_data->product_id;

        $product = $product = Product::where('id',$product_id) -> first();

        $product_image = ImageStoreAction::execute($image_data, $product);

        return GetResponseData::getResponseData(
            ImageData::fromModel($product_image),
            'image stored successfully',
            201
        );

    }

    /**
     * Remove the specified resource from storage.
     * @return ResponseData
     */
    public function destroy(int $id)
    {
        ProductImage::where('id',$id)->delete();

        return GetResponseData::getResponseData(
            null,
            'image deleted successfully',
            200
        );
    }
    
}
