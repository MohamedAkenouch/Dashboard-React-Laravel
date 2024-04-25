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
use Modules\Feature\Actions\FeatureValueStoreAction;
use Modules\Feature\Actions\FeatureValueUpdateAction;
use Modules\Feature\DTO\FeatureData;
use Modules\Feature\DTO\FeatureValueData;
use Modules\Feature\Entities\Feature;
use Modules\Feature\Entities\FeatureValue;
use Modules\Feature\Http\Requests\FeatureValueDeleteRequest;
use Modules\Feature\Http\Requests\FeatureValueIndexRequest;
use Modules\Feature\Http\Requests\FeatureValueShowRequest;
use Modules\Feature\Http\Requests\FeatureValueStoreRequest;
use Modules\Feature\Http\Requests\FeatureValueUpdateRequest;
use Spatie\QueryBuilder\QueryBuilder;

class FeatureValueController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return ResponsePaginationData
     */
    public function index(FeatureValueIndexRequest $request)
    {
        $columns = Schema::getColumnListing("feature_values");
        $feature_values = QueryBuilder::for(FeatureValue::class)
            ->allowedFilters($columns)
            ->allowedSorts($columns);

        $feature_values = $feature_values->paginate($request->items_per_page);

        return GetResponsePaginationData::getResponsePaginationData(
            $feature_values,
            $feature_values,
            DTOCaster::cast($feature_values, FeatureValueData::class),
        );
    }

    /**
     * Show the specified resource.
     * @param FeatureValueShowRequest $request
     * @param FeatureValue $feature_value
     * @return ResponseData
     */
    public function show(FeatureValueShowRequest $request, FeatureValue $feature_value)
    {
        return GetResponseData::getResponseData(
            FeatureValueData::fromModel($feature_value->load('feature')),
            'feature value showed successfully',
            200
        );
    }

    /**
     * Store a newly created resource in storage.
     * @param FeatureValueStoreRequest $request
     * @param int $id
     * @return ResponseData
     */
    public function store(FeatureValueStoreRequest $request, int $id)
    {
        $feature = Feature::where('id',$id)->first();
        $feature_values_data = FeatureValueData::fromRequest($request);
        $feature_values = FeatureValueStoreAction::execute($feature_values_data, $feature);

        return GetResponseData::getResponseData(
            FeatureData::toFeatureModel($feature),
            'feature values stored successfully',
            201
        );
    }

    /**
     * Update the specified resource in storage.
     * @param FeatureValueUpdateRequest $request
     * @param int $idFeature
     * @param int $id
     * @return ResponseData
     */
    public function update(FeatureValueUpdateRequest $request, int $idFeature, int $id)
    {
        $feature = Feature::where('id',$idFeature)->first();
        $feature_value = FeatureValue::where('id',$id)->first();

        $feature_values_data = FeatureValueData::fromRequest($request);
        $feature_values = FeatureValueUpdateAction::execute($feature_values_data, $feature, $feature_value);

        return GetResponseData::getResponseData(
            FeatureData::toFeatureModel($feature->load('feature_values')),
            'feature values updated successfully',
            200
        );
    }

    /**
     * Remove the specified resource from storage.
     * @param FeatureValueDeleteRequest $request
     * @param int $id
     * @return ResponseData
     */
    public function destroy(FeatureValueDeleteRequest $request, int $id)
    {
        // $feature_value->delete();
        FeatureValue::where('id',$id)->delete();

        return GetResponseData::getResponseData(
            null,
            'feature values deleted successfully',
            200
        );

    }
}
