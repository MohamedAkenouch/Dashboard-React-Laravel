<?php

namespace Modules\Status\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\User\Entities\User;
use Modules\Category\Entities\Category;
use Modules\Order\Entities\Order;

class StatusController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        $count_users = User::count();
        $count_orders = Order::count(); 
        $count_categories = Category::count(); 
        $count_pending_orders = Order::where('status','=','pending')->count();  
        $count_canceled_orders = Order::where('status','=','canceled')->count();  
        $count_completed_orders = Order::where('status','=','completed')->count();  
        $revenu = (Order::where('status','completed')->sum('sub_total') * 1.05) + Order::where('status','completed')->sum('shipping');
        $tax = Order::where('status','completed')->sum('sub_total') * 0.05 ;
        $data = [
            'count_users' => (int) $count_users,
            'count_orders' => (int) $count_orders,
            'count_categories' => (int) $count_categories,
            'count_pending_orders' => (int) $count_pending_orders,
            'count_canceled_orders' => (int) $count_canceled_orders,
            'count_completed_orders' => (int) $count_completed_orders,
            'revenu' => (float) $revenu,
            'tax' => (float) $tax

        ];

        return $data;
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        return view('status::create');
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
    public function show($id)
    {
        return view('status::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        return view('status::edit');
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
