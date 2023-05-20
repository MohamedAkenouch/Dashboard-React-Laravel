<?php

namespace Modules\Message\Http\Controllers;

use App\DTO\DTOCaster;
use App\DTO\GetResponseData;
use App\DTO\GetResponsePaginationData;
use App\DTO\ResponseData;
use App\DTO\ResponsePaginationData;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Schema;
use Modules\Message\Actions\InboxMessageStoreAction;
use Modules\Message\DTO\InboxMessageData;
use Modules\Message\Entities\InboxMessage;
use Modules\Message\Http\Requests\InboxMessageIndexRequest;
use Modules\Message\Http\Requests\InboxMessageShowRequest;
use Modules\Message\Http\Requests\InboxMessageStoreRequest;
use Spatie\QueryBuilder\QueryBuilder;

class InboxMessageController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return ResponsePaginationData
     */
    public function index(InboxMessageIndexRequest $request)
    {
        $columns = Schema::getColumnListing("inbox_messages");
        $inbox_messages = QueryBuilder::for(InboxMessage::class)
            ->allowedFilters($columns)
            ->allowedSorts($columns);

        $inbox_messages = $inbox_messages->paginate($request->items_per_page);

        return GetResponsePaginationData::getResponsePaginationData(
            $inbox_messages,
            $inbox_messages,
            DTOCaster::cast($inbox_messages, InboxMessageData::class),
        );
    }

    /**
     * Show the specified resource.
     * @param InboxMessageShowRequest $request
     * @param InboxMessage $inbox_message
     * @return ResponseData
     */
    public function show(InboxMessageShowRequest $request, InboxMessage $inbox_message)
    {
        return GetResponseData::getResponseData(
            InboxMessageData::fromModel($inbox_message),
            'inbox message showed successfully',
            200
        );
    }

    /**
     * Store a newly created resource in storage.
     * @param InboxMessageStoreRequest $request
     * @return ResponseData
     */
    public function store(InboxMessageStoreRequest $request)
    {
        $inbox_message_data = InboxMessageData::fromRequest($request);

        $inbox_message = InboxMessageStoreAction::execute($inbox_message_data);

        return GetResponseData::getResponseData(
            InboxMessageData::fromModel($inbox_message),
            'inbox message stored successfully',
            201
        );
    }


    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(Request $request, $id)
    {
        //
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
