<?php

namespace Modules\Feature\Http\Controllers;

use App\DTO\DTOCaster;
use App\DTO\GetResponseData;
use App\DTO\GetResponsePaginationData;
use App\DTO\ResponseData;
use App\DTO\ResponsePaginationData;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Schema;
use Modules\Feature\Actions\FeatureStoreAction;
use Modules\Feature\Actions\FeatureUpdateAction;
use Modules\Feature\Actions\FeatureValueStoreAction;
use Modules\Feature\Actions\FeatureValueUpdateAction;
use Modules\Feature\DTO\FeatureData;
use Modules\Feature\Entities\Feature;
use Modules\Feature\Http\Requests\FeatureDeleteRequest;
use Modules\Feature\Http\Requests\FeatureIndexRequest;
use Modules\Feature\Http\Requests\FeatureShowRequest;
use Modules\Feature\Http\Requests\FeatureStoreRequest;
use Modules\Feature\Http\Requests\FeatureUpdateRequest;
use Spatie\QueryBuilder\QueryBuilder;

class FeatureController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return ResponsePaginationData
     */
    public function index(FeatureIndexRequest $request)
    {
        $columns = Schema::getColumnListing("features");
        $features = QueryBuilder::for(Feature::class)
            ->allowedFilters($columns)
            ->allowedSorts($columns);

        $features = $features->paginate($request->items_per_page);

        return GetResponsePaginationData::getResponsePaginationData(
            $features,
            $features,
            DTOCaster::cast($features, FeatureData::class,'toFeatureModel'),
        );
    }

    /**
     * Show the specified resource.
     * @param FeatureShowRequest $request
     * @param Feature $feature
     * @return ResponseData
     */
    public function show(FeatureShowRequest $request, Feature $feature)
    {
        return GetResponseData::getResponseData(
            FeatureData::toFeatureModel($feature->load('feature_values')),
            'feature showed successfully',
            200
        );
    }

    /**
     * Store a newly created resource in storage.
     * @param FeatureStoreRequest $request
     * @return ResponseData
     */
    public function store(FeatureStoreRequest $request)
    {
        $feature_data = FeatureData::fromRequest($request);

        $feature = FeatureStoreAction::execute($feature_data);

        return GetResponseData::getResponseData(
            FeatureData::fromModel($feature),
            'feature stored successfully',
            201
        );
    }


    /**
     * Update the specified resource in storage.
     * @param FeatureUpdateRequest $request
     * @param int $id
     * @return ResponseData
     */
    public function update(FeatureUpdateRequest $request, int $id)
    {
        $feature_data = FeatureData::fromRequest($request);

        $feature = FeatureUpdateAction::execute($feature_data, $id);

        return GetResponseData::getResponseData(
            FeatureData::fromModel($feature),
            'feature updated successfully',
            200
        );
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return ResponseData
     */
    public function destroy(FeatureDeleteRequest $request, $id)
    {
        Feature::where('id',$id)->delete();

        return GetResponseData::getResponseData(
            null,
            'feature deleted successfully',
            200
        );
    }
}
