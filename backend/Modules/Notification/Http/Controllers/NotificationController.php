<?php

namespace Modules\Notification\Http\Controllers;

use App\DTO\DTOCaster;
use App\DTO\GetResponseData;
use App\DTO\GetResponsePaginationData;
use App\DTO\ResponsePaginationData;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Schema;
use Modules\Notification\DTO\NotificationData;
use Modules\Notification\Http\Requests\NotificationIndexRequest;
use Modules\Notification\Http\Requests\NotificationShowRequest;
use Modules\Ticket\Entities\Notification;
use Modules\Ticket\Entities\Ticket;
use Modules\Ticket\Entities\UserNotification;
use Spatie\DataTransferObject\DataTransferObject;
use Spatie\QueryBuilder\QueryBuilder;

class NotificationController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return ResponsePaginationData
     */
    public function index(NotificationIndexRequest $request)
    {
        $columns = Schema::getColumnListing("notifications");
        $notifications = QueryBuilder::for(Notification::class)
            ->allowedFilters($columns)
            ->allowedSorts($columns)
            ->orderBy('created_at', 'DESC')
            ->where('user_id',Auth::id())
            ->where('notifiable', Ticket::class);

        $notifications = $notifications->paginate($request->items_per_page);

        return GetResponsePaginationData::getResponsePaginationData(
            $notifications,
            $notifications,
            DTOCaster::cast($notifications, NotificationData::class),
            [
                'notification_number' => Notification::where('user_id',Auth::id())
                    ->where('notifiable', Ticket::class)->where('is_read', '!=', 1)->count()
            ],
        );
    }


    public function show(NotificationShowRequest $request,Notification $notification)
    {
        $notification_details = Notification::find($notification->id)->first();

        return GetResponseData::getResponseData(
            NotificationData::fromModel($notification_details),
            null,
            200
        );
    }

    public function getNotificationsNumber(){

        $result =UserNotification:: notificationNumber()->count();

        return response()->json(
            [
                'data' =>[
                    'number_of_notifications'=>(int)$result
                ],
                'status'=>200
            ]
            ,200);
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return \App\DTO\ResponseData
     */
    public function store($notification_info)
    {
        $notification = 0;

        return GetResponseData::getResponseData(
            NotificationData::fromModel($notification),
            null,
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
