<?php

namespace Modules\Notification\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;

class NotificationPolicy
{
    public static function browse($user = null){
        $allowed =
            optional($user)->hasPermission('browse_notifications');

        return $allowed;
    }

    public static function read($user){
        $allowed =
            optional($user)->hasPermission('read_notifications');

        return $allowed;
    }

    public static function add($user){
        $allowed =
            optional($user)->hasPermission('add_notifications');

        return $allowed;
    }

    public static function edit($user){
        $allowed =
            optional($user)->hasPermission('edit_notifications');

        return $allowed;
    }

    public static function delete($user){
        $allowed =
            optional($user)->hasPermission('delete_notifications');

        return $allowed;
    }
}
