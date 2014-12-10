<?php

class ContactsController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
        return Contact::all();
	}


    /**
    * Show the form for creating a new resource.
    *
    * @return Response
    */
    public function create()
    {
    //
    }


    /**
    * Store a newly created resource in storage.
    *
    * @return Response
    */
    public function store()
    {
        $input = Input::all();
        return Contact::create($input);
    }


    /**
    * Display the specified resource.
    *
    * @param  int  $id
    * @return Response
    */
    public function show($id)
    {
        return Contact::find($id);
    }


    /**
    * Show the form for editing the specified resource.
    *
    * @param  int  $id
    * @return Response
    */
    public function edit($id)
    {
    //
    }


    /**
    * Update the specified resource in storage.
    *
    * @param  int  $id
    * @return Response
    */
    public function update($id)
    {
        $input = Input::all();
        $contact = Contact::find($id);

        $contact->first_name = $input['first_name'];
        $contact->last_name = $input['last_name'];
        $contact->email = $input['email'];
        $contact->description = $input['description'];

        $contact->save();
    }


    /**
    * Remove the specified resource from storage.
    *
    * @param  int  $id
    * @return Response
    */
    public function destroy($id)
    {
        return Contact::find($id)->destroy();
    }


}
