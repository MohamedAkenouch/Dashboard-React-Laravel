<?php

namespace Modules\Order\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Http;
use Config;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        return view('order::index');
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
        // dd($request->totals);
    
            // $itms=[];
            // foreach($request->items as $item){
            //     $itms->push([
            //         "name"=> $item->name,
            //         "sku"=> $item->sku,
            //         "unitprice"=> $item->unitprice,
            //         "quantity"=> $item->quantity,
            //         "linetotal"=> $item->linetotal,
            //         ]);
                
            // };
        
        
        $response = Http::accept('application/json')->withHeaders([
            'X-PointCheckout-Api-Key' => Config::get('services.payment.key'),
            'X-PointCheckout-Api-Secret' => Config::get('services.payment.secret_key')
            
        ])->post('https://api.test.paymennt.com/mer/v2.0/checkout/web',[

            
                "requestId" => 'ORD-'.strtoupper(uniqid()),
                "orderId" => $request->orderId,
                "currency"=> "AED",
                "amount"=> $request->amount,
                "totals"=>$request->totals,
                
                "items" =>  $request->items,
                "customer" =>$request->customer,
                
                "billingAddress"=>$request->billingAddress,
              
                
              
                "returnUrl"=> $request->returnUrl,
                
                
                "defaultPaymentMethod"=> "CARD",
                "language"=> "EN",
                
        ]);
       
        return $response;

    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        return view('order::show');
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
