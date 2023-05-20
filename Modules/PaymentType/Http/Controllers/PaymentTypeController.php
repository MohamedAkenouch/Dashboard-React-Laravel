<?php

namespace Modules\PaymentType\Http\Controllers;

use App\DTO\DTOCaster;
use App\DTO\GetResponseData;
use App\DTO\GetResponsePaginationData;
use App\DTO\ResponseData;
use App\DTO\ResponsePaginationData;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Schema;
use Modules\PaymentType\Actions\PaymentTypeStoreAction;
use Modules\PaymentType\Actions\PaymentTypeUpdateAction;
use Modules\PaymentType\DTO\PaymentTypeData;
use Modules\PaymentType\Entities\PaymentType;
use Modules\PaymentType\Http\Requests\PaymentTypeDeleteRequest;
use Modules\PaymentType\Http\Requests\PaymentTypeIndexRequest;
use Modules\PaymentType\Http\Requests\PaymentTypeShowRequest;
use Modules\PaymentType\Http\Requests\PaymentTypeStoreRequest;
use Modules\PaymentType\Http\Requests\PaymentTypeUpdateRequest;
use Spatie\QueryBuilder\QueryBuilder;

class PaymentTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return ResponsePaginationData
     */
    public function index(PaymentTypeIndexRequest $request)
    {
        $columns = Schema::getColumnListing("payment_types");
        $payment_types = QueryBuilder::for(PaymentType::class)
            ->allowedFilters($columns)
            ->allowedSorts($columns);

        $payment_types = $payment_types->paginate($request->items_per_page);

        return GetResponsePaginationData::getResponsePaginationData(
            $payment_types,
            $payment_types,
            DTOCaster::cast($payment_types, PaymentTypeData::class),
        );
    }

    /**
     * Show the specified resource.
     * @param PaymentTypeShowRequest $request
     * @param PaymentType $payment_type
     * @return ResponseData
     */
    public function show(PaymentTypeShowRequest $request, PaymentType $payment_type)
    {
        return GetResponseData::getResponseData(
            PaymentTypeData::fromModel($payment_type),
            'payment type showed successfully',
            200
        );
    }

    /**
     * Store a newly created resource in storage.
     * @param PaymentTypeStoreRequest $request
     * @return ResponseData
     */
    public function store(PaymentTypeStoreRequest $request)
    {
        $payment_type_data = PaymentTypeData::fromRequest($request);

        $payment_type = PaymentTypeStoreAction::execute($payment_type_data);

        return GetResponseData::getResponseData(
            PaymentTypeData::fromModel($payment_type),
            'payment type stored successfully',
            201
        );
    }


    /**
     * Update the specified resource in storage.
     * @param PaymentTypeUpdateRequest $request
     * @param PaymentType $payment_type
     * @return ResponseData
     */
    public function update(PaymentTypeUpdateRequest $request, PaymentType $payment_type)
    {
        $payment_type_data = PaymentTypeData::fromRequest($request);

        $payment_type = PaymentTypeUpdateAction::execute($payment_type_data, $payment_type);

        return GetResponseData::getResponseData(
            PaymentTypeData::fromModel($payment_type),
            'payment type updated successfully',
            200
        );
    }

    /**
     * Remove the specified resource from storage.
     * @param PaymentTypeDeleteRequest $request
     * @param PaymentType $payment_type
     * @return ResponseData
     */
    public function destroy(PaymentTypeDeleteRequest $request, PaymentType $payment_type)
    {
        $payment_type->delete();

        return GetResponseData::getResponseData(
            null,
            'payment type deleted successfully',
            200
        );
    }
}
