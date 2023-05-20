<?php

namespace Modules\User\Http\Controllers;
use App\DTO\GetResponseData;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\User\Entities\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        return view('user::index');
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        return view('user::create');
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
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($phone)

    {
        $user=User::where('phone_number',$phone) -> first();
       return $user;
    }

    /**
     * Show all users.
     * @return Renderable
     */
    public function show_users()

    {
       return User::all();
    }


    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        return view('user::edit');
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
    public function destroy($phone)
    {
        $user=User::where('phone_number',$phone) -> first();
        if($user){
            $user->delete();
            GetResponseData::getResponseData(
                null,
                'Account Deleted',
                200
            );
        }
        
    }

    public function getUserById($id){
        $user=User::where('id',$id) -> first();
       return $user;
    }
}
