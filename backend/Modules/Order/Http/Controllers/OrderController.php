<?php

namespace Modules\Order\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use App\custom_filters\TranslateFilter;
use Illuminate\Routing\Controller;
use Modules\Order\Entities\Order;
use Modules\User\Entities\User;
use Modules\Order\Entities\OrderItem;
use Illuminate\Support\Facades\Schema;
use Carbon\Carbon;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;
use Illuminate\Support\Facades\Http;
use Config;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index(Request $request)
    {
        $columns = Schema::getColumnListing("orders");

        $orders = QueryBuilder::for(Order::class)
            ->allowedFilters( [
                    AllowedFilter::custom('name',new TranslateFilter()),] + $columns)
            ->allowedSorts($columns)
            ->orderByDesc('created_at');

        $orders = $orders->paginate($request->items_per_page);
        return $orders;

        // return GetResponsePaginationData::getResponsePaginationData(
        //     $orders,
        //     $orders,
        //     DTOCaster::cast($categories, CategoryData::class),
        // );
    }
    public function redirect(Request $request) 
{
     $reference = $request->reference;
     $checkout = $request->checkout;
     $response = Http::withHeaders([
        'X-PointCheckout-Api-Key' => Config::get('services.payment.key'),
        'X-PointCheckout-Api-Secret' => Config::get('services.payment.secret_key')
        
    ])->get("https://api.test.paymennt.com/mer/v2.0/checkout/$checkout");
    $data = json_decode($response->body(), true);
    // dd($data['result']['status']);
    // $order = Order::where('order_id', "ORD-630A6436AB7D3")->first();
    if($data['result']['status']=="PAID"){
        
        $test=Order::where('order_id',$data['result']['orderId'] )->update([
            'status' =>'completed',
            'payment_status'=>1,
            'end_date'=>Carbon::now(),
        ]);
        $orderId=$data['result']['orderId'];
        return view('order::orderstatus',compact('orderId'));
    }else{

        Order::where('order_id', $reference)->update([
            'status' =>'canceled',
        
            'end_date'=>Carbon::now(),
        ]);
        // dd("do");
        return view('order::orderstatusfail');
    }
    
    // Order::get('order_id', $reference);

    // dd($order->status);
// dd($data['result']);
}
public function orderByUser(int $userId) 
{
    $user= User::find($userId);
   $orders= $user->orders()->get();
   return  $orders;


     
    
    // Order::get('order_id', $reference);

    // dd($order->status);
// dd($data['result']);
}

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        return view('order::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(Request $request)
    {

      
       
        $order = Order::create([
            'order_id'      =>  'ORD-'.strtoupper(uniqid()),
            'user_id'           => $request->user_id,
            'status'            =>  'pending',
            'sub_total'       =>  $request->sub_total,
            'item_count'        =>  $request->item_count,
            'payment_status'    =>  0,
            
            'shipping'        => $request->shipping,
            'start_date'         => Carbon::now(),
            'end_date'           => null,
            'receiver_addr'        =>  $request->receiver_addr,
            'city'        =>  $request->city,
            'order_img'        =>  $request->order_img,
            'user_phone_number'           => $request->user_phone_number,
            'receiver_phone_number'         =>  $request->receiver_phone_number,
            'addt_addr'      => $request->addt_addr,
            'selected_msg'             =>  $request->selected_msg,
            'phrase'             =>  $request->phrase,
        ]);
    
        if ($order) {
    
            $items = $request->items;
           
            
            foreach ($items as $item)
            {
                // dd($item['product_id']);
                // A better way will be to bring the product id with the cart items
                // you can explore the package documentation to send product id with the cart
                // $product = Product::where('id', $item->id)->first();
    
                $orderItem = new OrderItem([
                    'product_id'    =>  $item["product_id"],
                    'quantity'      =>  $item["quantity"],
                    'price'         =>  $item["price"],
                    'size_price'    =>  $item["size_price"],
                    'size'         =>  $item["size"],
                    'name'         =>  $item["name"],
                    'item_img'         =>  $item["item_img"],
                    'color'         =>  $item["color"]
                
                ]);
    
                $order->items()->save($orderItem);
            }
        }
    
        return $order;
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show( int $id)
    {
        $order= Order::find($id);
        return $order->items;
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        return view('order::edit');
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function updateState(Request $request,$id)
    {
        Order::where('id',$id)->update(['status'=>$request->status]);
        $order = Order::where('id',$id)->first();
        return $order;
    }
    public function getOrdredItem($id)
    {
        $orders = OrderItem::where('order_id',$id)->get();
        return $orders ;
    }
    public function getOrdredItems()
    {
        $orders = OrderItem::all();
        return $orders ;
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
