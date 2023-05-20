<?php

namespace Modules\PhotoGallery\Http\Controllers;

use App\DTO\DTOCaster;
use App\DTO\GetResponseData;
use App\DTO\GetResponsePaginationData;
use App\DTO\ResponseData;
use App\DTO\ResponsePaginationData;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Schema;
use Modules\PhotoGallery\Actions\PhotoGalleryStoreAction;
use Modules\PhotoGallery\Actions\PhotoGalleryUpdateAction;
use Modules\PhotoGallery\DTO\PhotoGalleryData;
use Modules\PhotoGallery\Entities\PhotoGallery;
use Modules\PhotoGallery\Http\Requests\PhotoGalleryDeleteRequest;
use Modules\PhotoGallery\Http\Requests\PhotoGalleryIndexRequest;
use Modules\PhotoGallery\Http\Requests\PhotoGalleryShowRequest;
use Modules\PhotoGallery\Http\Requests\PhotoGalleryStoreRequest;
use Modules\PhotoGallery\Http\Requests\PhotoGalleryUpdateRequest;
use Spatie\QueryBuilder\QueryBuilder;

class PhotoGalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return ResponsePaginationData
     */
    public function index(PhotoGalleryIndexRequest $request)
    {
        $columns = Schema::getColumnListing("photo_galleries");
        $photo_galleries = QueryBuilder::for(PhotoGallery::class)
            ->allowedFilters($columns)
            ->allowedSorts($columns);

        $photo_galleries = $photo_galleries->paginate($request->items_per_page);

        return GetResponsePaginationData::getResponsePaginationData(
            $photo_galleries,
            $photo_galleries,
            DTOCaster::cast($photo_galleries, PhotoGalleryData::class),
        );
    }

    /**
     * Show the specified resource.
     * @param PhotoGalleryShowRequest $request
     * @param PhotoGallery $photo_gallery
     * @return ResponseData
     */
    public function show(PhotoGalleryShowRequest $request, PhotoGallery $photo_gallery)
    {
        return GetResponseData::getResponseData(
            PhotoGalleryData::fromModel($photo_gallery),
            'photo_gallery showed successfully',
            200
        );
    }

    /**
     * Store a newly created resource in storage.
     * @param PhotoGalleryStoreRequest $request
     * @return ResponseData
     */
    public function store(PhotoGalleryStoreRequest $request)
    {
        $photo_gallery_data = PhotoGalleryData::fromRequest($request);
        $photo_gallery = PhotoGalleryStoreAction::execute($photo_gallery_data);

        return GetResponseData::getResponseData(
            PhotoGalleryData::fromModel($photo_gallery),
            'photo_gallery stored successfully',
            201
        );
    }

    /**
     * Update the specified resource in storage.
     * @param PhotoGalleryUpdateRequest $request
     * @param PhotoGallery $photo_gallery
     * @return ResponseData
     */
    public function update(PhotoGalleryUpdateRequest $request, PhotoGallery $photo_gallery)
    {
        $photo_gallery_data = PhotoGalleryData::fromRequest($request);
        $photo_gallery = PhotoGalleryUpdateAction::execute($photo_gallery_data, $photo_gallery);

        return GetResponseData::getResponseData(
            PhotoGalleryData::fromModel($photo_gallery),
            'photo_gallery updated successfully',
            200
        );
    }

    /**
     * Remove the specified resource from storage.
     * @param PhotoGalleryDeleteRequest $request
     * @param PhotoGallery $photo_gallery
     * @return ResponseData
     */
    public function destroy(PhotoGalleryDeleteRequest $request, PhotoGallery $photo_gallery)
    {
        $photo_gallery->delete();

        return GetResponseData::getResponseData(
            null,
            'photo_gallery deleted successfully',
            200
        );

    }
}
