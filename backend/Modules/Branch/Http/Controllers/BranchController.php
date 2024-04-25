<?php

namespace Modules\Branch\Http\Controllers;

use App\DTO\DTOCaster;
use App\DTO\GetResponseData;
use App\DTO\GetResponsePaginationData;
use App\DTO\ResponseData;
use App\DTO\ResponsePaginationData;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Schema;
use Modules\Branch\Actions\BranchStoreAction;
use Modules\Branch\Actions\BranchUpdateAction;
use Modules\Branch\DTO\BranchData;
use Modules\Branch\Entities\Branch;
use Modules\Branch\Http\Requests\BranchDeleteRequest;
use Modules\Branch\Http\Requests\BranchIndexRequest;
use Modules\Branch\Http\Requests\BranchShowRequest;
use Modules\Branch\Http\Requests\BranchStoreRequest;
use Modules\Branch\Http\Requests\BranchUpdateRequest;
use Spatie\QueryBuilder\QueryBuilder;

class BranchController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return ResponsePaginationData
     */
    public function index(BranchIndexRequest $request)
    {
        $columns = Schema::getColumnListing("branches");
        $branches = QueryBuilder::for(Branch::class)
            ->allowedFilters($columns)
            ->allowedSorts($columns);

        $branches = $branches->paginate($request->items_per_page);

        return GetResponsePaginationData::getResponsePaginationData(
            $branches,
            $branches,
            DTOCaster::cast($branches, BranchData::class),
        );
    }

    /**
     * Show the specified resource.
     * @param BranchShowRequest $request
     * @param Branch $branch
     * @return ResponseData
     */
    public function show(BranchShowRequest $request, Branch $branch)
    {
        return GetResponseData::getResponseData(
          BranchData::fromModel($branch),
          'branch showed successfully',
          200
        );
    }

    /**
     * Store a newly created resource in storage.
     * @param BranchStoreRequest $request
     * @return ResponseData
     */
    public function store(BranchStoreRequest $request)
    {
        $branch_data = BranchData::fromRequest($request);

        $branch = BranchStoreAction::execute($branch_data);

        return GetResponseData::getResponseData(
            BranchData::fromModel($branch),
            'branch stored successfully',
            201
        );
    }


    /**
     * Update the specified resource in storage.
     * @param BranchUpdateRequest $request
     * @param int $id
     * @return ResponseData
     */
    public function update(BranchUpdateRequest $request, int $id)
    {
        $branch_data = BranchData::fromRequest($request);

        $branch = BranchUpdateAction::execute($branch_data, $id);

        return GetResponseData::getResponseData(
            BranchData::fromModel($branch),
            'branch updated successfully',
            200
        );

    }

    /**
     * Remove the specified resource from storage.
     * @param BranchDeleteRequest $request
     * @param int $id
     * @return ResponseData
     */
    public function destroy(BranchDeleteRequest $request, int $id)
    {
        ////$branch->delete();
        Branch::where('id',$id)->delete();

        return GetResponseData::getResponseData(
            null,
            'branch deleted successfully',
            200
        );
    }
}
