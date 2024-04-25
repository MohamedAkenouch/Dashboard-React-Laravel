<?php

namespace Modules\Banner\Http\Controllers;

use App\DTO\DTOCaster;
use App\DTO\GetResponseData;
use App\DTO\GetResponsePaginationData;
use App\DTO\ResponseData;
use App\DTO\ResponsePaginationData;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Schema;
use Modules\Banner\Actions\BannerStoreAction;
use Modules\Banner\Actions\BannerUpdateAction;
use Modules\Banner\DTO\BannerData;
use Modules\Banner\Entities\Banner;
use Modules\Banner\Http\Requests\BannerDeleteRequest;
use Modules\Banner\Http\Requests\BannerIndexRequest;
use Modules\Banner\Http\Requests\BannerShowRequest;
use Modules\Banner\Http\Requests\BannerStoreRequest;
use Modules\Banner\Http\Requests\BannerUpdateRequest;
use Spatie\QueryBuilder\QueryBuilder;

class BannerController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return ResponsePaginationData
     */
    public function index(BannerIndexRequest $request)
    {
        $columns = Schema::getColumnListing("banners");
        $banners = QueryBuilder::for(Banner::class)
            ->allowedFilters($columns)
            ->allowedSorts($columns);

        $banners = $banners->paginate($request->items_per_page);

        return GetResponsePaginationData::getResponsePaginationData(
            $banners,
            $banners,
            DTOCaster::cast($banners, BannerData::class),
        );
    }

    /**
     * Show the specified resource.
     * @param BannerShowRequest $request
     * @param Banner $banner
     * @return ResponseData
     */
    public function show(BannerShowRequest $request, Banner $banner)
    {
        return GetResponseData::getResponseData(
            BannerData::fromModel($banner),
            'banner showed successfully',
            200
        );
    }

    /**
     * Store a newly created resource in storage.
     * @param BannerStoreRequest $request
     * @return ResponseData
     */
    public function store(BannerStoreRequest $request)
    {
        $banner_data = BannerData::fromRequest($request);

        $banner = BannerStoreAction::execute($banner_data);

        return GetResponseData::getResponseData(
            BannerData::fromModel($banner),
            'banner stored successfully',
            201
        );
    }


    /**
     * Update the specified resource in storage.
     * @param BannerUpdateRequest $request
     * @param int $id
     * @return ResponseData
     */
    public function update(BannerUpdateRequest $request, int $id)
    {
        $banner_data = BannerData::fromRequest($request);

        $banner = BannerUpdateAction::execute($banner_data, $id);

        return GetResponseData::getResponseData(
            BannerData::fromModel($banner),
            'banner updated successfully',
            200
        );
    }

    /**
     * Remove the specified resource from storage.
     * @param BannerDeleteRequest $request
     * @param int $id
     * @return ResponseData
     */
    public function destroy(BannerDeleteRequest $request, int $id)
    {
        // $banner->delete();
        Banner::where('id',$id)->delete();

        return GetResponseData::getResponseData(
            null,
            'banner deleted successfully',
            200
        );
    }
}
