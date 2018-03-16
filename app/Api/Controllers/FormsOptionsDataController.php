<?php

namespace euro_hms\Api\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use euro_hms\Models\User;
use euro_hms\Models\FormsOptionsData;
use euro_hms\Models\Forms;
use euro_hms\Api\Repositories\FormOptionsRepository;

use DB;
use Carbon\Carbon;

class FormsOptionsDataController extends Controller
{

    public function __construct(FormOptionsRepository $formOptionRepo)
    {
        $this->formOptionRepo = $formOptionRepo;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // echo "<pre>";print_r($request->all());echo "</pre>";
        dd($request->all()); 
        $data = $request->all()['form_data'];
        $resultData = '';
        if($data['type'] == 'labSheet'){
            $resultData = $this->formOptionRepo->storeLabSheetData($data);
        }
        
        return ['status' => '200','data'=>$resultData, 'message' => 'Record Sucessfully created'];
        return $resultData;
        // return view('\index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
