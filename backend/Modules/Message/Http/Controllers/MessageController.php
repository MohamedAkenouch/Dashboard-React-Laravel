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
use Modules\Message\Actions\MessageStoreAction;
use Modules\Message\Actions\MessageUpdateAction;
use Modules\Message\DTO\MessageData;
use Modules\Message\Entities\Message;
use Modules\Message\Http\Requests\MessageDeleteRequest;
use Modules\Message\Http\Requests\MessageIndexRequest;
use Modules\Message\Http\Requests\MessageShowRequest;
use Modules\Message\Http\Requests\MessageStoreRequest;
use Modules\Message\Http\Requests\MessageUpdateRequest;
use Spatie\QueryBuilder\QueryBuilder;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return ResponsePaginationData
     */
    public function index(MessageIndexRequest $request)
    {
        $columns = Schema::getColumnListing("messages");
        $messages = QueryBuilder::for(Message::class)
            ->allowedFilters($columns)
            ->allowedSorts($columns);

        $messages = $messages->paginate($request->items_per_page);

        return GetResponsePaginationData::getResponsePaginationData(
            $messages,
            $messages,
            DTOCaster::cast($messages, MessageData::class),
        );
    }

    /**
     * Show the specified resource.
     * @param MessageShowRequest $request
     * @param Message $message
     * @return ResponseData
     */
    public function show(MessageShowRequest $request, Message $message)
    {
        return GetResponseData::getResponseData(
            MessageData::fromModel($message),
            'message showed successfully',
            200
        );
    }

    /**
     * Store a newly created resource in storage.
     * @param MessageStoreRequest $request
     * @return ResponseData
     */
    public function store(MessageStoreRequest $request)
    {
        $message_data = MessageData::fromRequest($request);

        $message = MessageStoreAction::execute($message_data);

        return GetResponseData::getResponseData(
            MessageData::fromModel($message),
            'message stored successfully',
            201
        );
    }


    /**
     * Update the specified resource in storage.
     * @param MessageUpdateRequest $request
     * @param Message $message
     * @return ResponseData
     */
    public function update(MessageUpdateRequest $request, Message $message)
    {
        $message_data = MessageData::fromRequest($request);

        $message = MessageUpdateAction::execute($message_data, $message);

        return GetResponseData::getResponseData(
            MessageData::fromModel($message),
            'message updated successfully',
            200
        );
    }

    /**
     * Remove the specified resource from storage.
     * @param MessageDeleteRequest $request
     * @param Message $message
     * @return ResponseData
     */
    public function destroy(MessageDeleteRequest $request, Message $message)
    {
        $message->delete();

        return GetResponseData::getResponseData(
            null,
            'message deleted successfully',
            200
        );

    }
}
