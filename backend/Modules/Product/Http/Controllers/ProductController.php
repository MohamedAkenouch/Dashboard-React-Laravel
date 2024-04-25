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
use Modules\Category\Entities\Category;
use Modules\Product\Actions\FeatureValueProductStoreAction;
use Modules\Product\Actions\FeatureValueProductUpdateAction;
use Modules\Product\Actions\ProductImageStoreAction;
use Modules\Product\Actions\ProductImageUpdateAction;
use Modules\Product\Actions\ProductStoreAction;
use Modules\Product\Actions\ProductUpdateAction;
use Modules\Product\DTO\ProductData;
use Modules\Product\DTO\ProductImageData;
use Modules\Product\Entities\Product;
use Modules\Product\Entities\ProductRelated;
use Modules\Product\Entities\FeatureProduct;
use Modules\Product\Entities\ProductTranslation;
use Modules\Product\Entities\CategoryProduct;
use Modules\Product\Http\Requests\ProductDeleteRequest;
use Modules\Product\Http\Requests\ProductIndexByCategoryRequest;
use Modules\Product\Http\Requests\ProductIndexRequest;
use Modules\Product\Http\Requests\ProductShowRequest;
use Modules\Product\Http\Requests\ProductStoreRequest;
use Modules\Product\Http\Requests\ProductUpdateRequest;
use Modules\Product\Http\Requests\ToggleFavoriteRequest;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\AllowedSort;
use Spatie\QueryBuilder\QueryBuilder;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return ResponsePaginationData
     */
    public function index(ProductIndexRequest $request)
    {
        $columns = Schema::getColumnListing("products");
        $products = QueryBuilder::for(Product::class)
            ->allowedFilters([
                    AllowedFilter::custom('name', new TranslateFilter())
                ] + $columns)
            ->allowedSorts($columns)
            ->orderByDesc('created_at')
            ;

        $products = $products->get();
       

        return DTOCaster::cast($products, ProductData::class);
    }

    public function indexByCategory(ProductIndexByCategoryRequest $request, Category $category)
    {
        $columns = Schema::getColumnListing("products");
        $products = QueryBuilder::for($category->products())
            ->allowedFilters([
                    AllowedFilter::custom('name', new TranslateFilter())
                ] + $columns)
            ->allowedSorts([
                    AllowedSort::custom('name', new TranslateSort())
                ] + $columns)
            ->orderByDesc('created_at');

        $products = $products->paginate($request->items_per_page);

        return GetResponsePaginationData::getResponsePaginationData(
            $products,
            $products,
            DTOCaster::cast($products, ProductData::class),
        );
    }

    /**
     * Show the specified resource.
     * @param ProductShowRequest $request
     * @param Product $product
     * @return ResponseData
     */
    public function show(ProductShowRequest $request, Product $product)
    {
        $product->update([
           'view' => $product->view + 1
        ]);
        return GetResponseData::getResponseData(
            ProductData::fromModel($product->load(['features','categories'])),
            'product showed successfully',
            200
        );
    }

    /**
     * Store a newly created resource in storage.
     * @param ProductStoreRequest $request
     * @return ResponseData
     */
    public function store(ProductStoreRequest $request)
    {
        $product_data = ProductData::fromRequest($request);

        $product = ProductStoreAction::execute($product_data);

        $product->categories()->attach($product_data->category_id);

        // $product->product_related()->attach($product_data->product_related);

        // $product_images = ProductImageStoreAction::execute($product_data, $product);

        // $feature_values_product = FeatureValueProductStoreAction::execute($product_data, $product);

        return GetResponseData::getResponseData(
            ProductData::fromModel($product->load('features')),
            'product stored successfully',
            201
        );

    }


    /**
     * Update the specified resource in storage.
     * @param ProductUpdateRequest $request
     * @param Product $product
     * @return ResponseData
     */
    public function update(ProductUpdateRequest $request, $product_id)
    {   
        $product = Product::where('id',$product_id) -> first();
        $product_data = ProductData::fromRequest($request);
        
        $product->categories()->detach();
        $product->categories()->attach($product_data->category_id);

        $product = ProductUpdateAction::execute($product_data, $product);

        $feature_values_product = FeatureValueProductUpdateAction::execute($product_data, $product);

        if($request->images)
        {
            $product_images_data = ProductImageData::fromArray($request->images, $request->old_images);
            $product_images = ProductImageUpdateAction::execute($product_images_data, $product);
        }

        return GetResponseData::getResponseData(
            ProductData::fromModel($product->load('features')),
            'product updated successfully',
            200
        );

    }

    /**
     * Remove the specified resource from storage.
     * @param ProductDeleteRequest $request
     * @param Product $product
     * @return ResponseData
     */
    public function destroy(Product $product_id)
    {
        $product->delete();

        return GetResponseData::getResponseData(
            null,
            'product deleted successfully',
            200
        );
    }

    public function toggleFavorite(ToggleFavoriteRequest $request, Product $product)
    {
        $product->update([
           'favorite' => !$product->favorite
        ]);

        return GetResponseData::getResponseData(
            null,
            'toggle favorite list successfully',
            200
        );
    }

    public function countFavoriteProducts()
    {
        $count_favorite_products = Product::all()
            ->where('favorite','=',1)->count();

        return GetResponseData::getResponseData(
            [
                'count_favorite_products' => $count_favorite_products
            ],
            null,
            200
        );

    }




//-------------------------------------------------------------------------------------------------------akee


    /**
     * add a new product.
     * @return Renderable
     */
    public function add_product()

    {
       return Product::create([
        'view' =>  request('view'),
        'favorite' => request('favorite'),
        'description' => request('description'),
        'price' => request('price'),
        'deleted_at' => request('deleted_at'),
        'created_at' => request('created_at'),
        'updated_at' => request('updated_at')
       ]);
    }

    public function delete($product_id)
    {
        Product::where('id',$product_id)->update(['deleted_at'=>request('date_delete')]);
        CategoryProduct::where('product_id',$product_id)->update(['deleted_at'=>request('date_delete')]);
        ProductRelated::where('product_id',$product_id)->update(['deleted_at'=>request('date_delete')]);
        ProductTranslation::where('product_id',$product_id)->update(['deleted_at'=>request('date_delete')]);
        FeatureProduct::where('product_id',$product_id)->update(['deleted_at'=>request('date_delete')]);

        return GetResponseData::getResponseData(
            null,
            'product deleted successfully',
            200
        );
    }

    public function getCategoryProduct (){
        return CategoryProduct::all();
    } 



    
}
