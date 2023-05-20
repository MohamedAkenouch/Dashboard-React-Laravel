<?php

namespace Modules\Category\Http\Controllers;

use App\custom_filters\TranslateFilter;
use App\DTO\DTOCaster;
use App\DTO\GetResponseData;
use App\DTO\GetResponsePaginationData;
use App\DTO\ResponseData;
use App\DTO\ResponsePaginationData;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Schema;
use Modules\Category\Actions\CategoryImageStoreAction;
use Modules\Category\Actions\CategoryImageUpdateAction;
use Modules\Category\Actions\CategoryStoreAction;
use Modules\Category\Actions\CategoryUpdateAction;
use Modules\Category\DTO\CategoryData;
use Modules\Category\DTO\CategoryImageData;
use Modules\Category\Entities\Category;
use Modules\Category\Http\Requests\CategoryDeleteRequest;
use Modules\Category\Http\Requests\CategoryIndexRequest;
use Modules\Category\Http\Requests\CategoryShowRequest;
use Modules\Category\Http\Requests\CategoryStoreRequest;
use Modules\Category\Http\Requests\CategoryUpdateRequest;
use Spatie\DataTransferObject\Exceptions\UnknownProperties;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return ResponsePaginationData
     */
    public function index(CategoryIndexRequest $request)
    {
        $columns = Schema::getColumnListing("categories");

        $categories = QueryBuilder::for(Category::class)
            ->allowedFilters( [
                    AllowedFilter::custom('name',new TranslateFilter()),] + $columns)
            ->allowedSorts($columns)
            ->orderByDesc('created_at');

        $categories = $categories->get();

        return DTOCaster::cast($categories, CategoryData::class);
    }

    /**
     * Show the specified resource.
     * @param CategoryShowRequest $request
     * @param Category $category
     * @return ResponseData
     */
    public function show(CategoryShowRequest $request, Category $category)
    {
        return GetResponseData::getResponseData(
            CategoryData::fromModel($category->load('products')),
            'category showed successfully',
            200
        );
    }

    /**
     * Store a newly created resource in storage.
     * @param CategoryStoreRequest $request
     * @return ResponseData
     */
    public function store(CategoryStoreRequest $request)
    {
        $category_data = CategoryData::fromRequest($request);
        $category = CategoryStoreAction::execute($category_data);

        $category_images_data = CategoryImageData::fromRequest($request);
        $category_images = CategoryImageStoreAction::execute($category_images_data, $category);

        return GetResponseData::getResponseData(
            CategoryData::fromModel($category),
            'category stored successfully',
            201

        );
    }


    /**
     * Update the specified resource in storage.
     * @param CategoryUpdateRequest $request
     * @param Category $category
     * @return ResponseData
     */
    public function update(CategoryUpdateRequest $request,  $id)
    {
        $category = Category::where('id',$id) -> first();
        $category_data = CategoryData::fromRequest($request);

        $category = CategoryUpdateAction::execute($category_data, $category);

        if($request->image)
        {
            $category_images_data = CategoryImageData::fromRequest($request);
            $category_images = CategoryImageUpdateAction::execute($category_images_data, $category);
        }

        return GetResponseData::getResponseData(
            CategoryData::fromModel($category),
            'category updated successfully',
            200
        );
    }

    /**
     * Remove the specified resource from storage.
     * @param CategoryDeleteRequest $request
     * @param Category $category
     * @return ResponseData
     */
    public function destroy(CategoryDeleteRequest $request, $id)
    {
        $category = Category::where('id',$id) -> first();
        $category->banners()->delete();
        $category->delete();

        return GetResponseData::getResponseData(
            null,
            'category deleted successfully',
            200
        );
    }
}
