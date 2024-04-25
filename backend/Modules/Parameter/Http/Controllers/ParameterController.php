<?php

namespace Modules\Parameter\Http\Controllers;

use App\DTO\DTOCaster;
use App\DTO\GetResponseData;
use App\DTO\GetResponsePaginationData;
use App\DTO\ResponseData;
use App\DTO\ResponsePaginationData;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Schema;
use Modules\Parameter\DTO\ParameterData;
use Modules\Parameter\Entities\Parameter;
use Modules\Parameter\Http\Requests\ParameterIndexRequest;
use Modules\Parameter\Http\Requests\ParameterUpdateRequest;
use Spatie\QueryBuilder\QueryBuilder;

class ParameterController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return ResponsePaginationData
     */
    public function index(ParameterIndexRequest $request)
    {
        $columns = Schema::getColumnListing("parameters");
        $parameters = QueryBuilder::for(Parameter::class)
            ->allowedFilters($columns)
            ->allowedSorts($columns);

        $parameters = $parameters->paginate($request->items_per_page);

        return GetResponsePaginationData::getResponsePaginationData(
            $parameters,
            $parameters,
            DTOCaster::cast($parameters, ParameterData::class),
        );
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        return view('parameter::show');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     * @param ParameterUpdateRequest $request
     * @param Parameter $parameter
     * @return ResponseData
     */
    public function update(ParameterUpdateRequest $request, Parameter $parameter)
    {
        $parameter_data = ParameterData::fromRequest($request);
        $parameter->update([
            'value' => $parameter_data->value
        ]);

        return GetResponseData::getResponseData(
            ParameterData::fromModel($parameter),
            'parameter updated successfully',
            200
        );
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        //
    }
}
