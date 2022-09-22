<?php

namespace App\Http\Controllers;

use App\Models\PostCrud;
use Illuminate\Http\Request;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;



class PostCrudController extends Controller
{

    public function get()
    {
        return PostCrud::select('id','title','image','text_post')->get();
    }

    public function create(Request $request)
    {
        // $posts=new PostCrud();
        // $request->validate([
        //     'title'=>'required',
        //     'image'=>'required|max:1024',
        //     'text_post'=>'required'
        // ]);

        // $filename="";
        // if($request->hasFile('image')){
        //     $filename=$request->file('image')->store('posts','public');
        // }else{
        //     $filename=Null;
        // }

        // $posts->title=$request->title;
        // $posts->image=$filename;
        // $posts->text_post=$request->text_post;
        // $result=$posts->save();
        // if($result){
        //     return response()->json(['success'=>true]);
        // }else {
        //     return response()->json(['sucess'=>false]);
        // }
        
        $request->validate([
            'title'=>'required',
            'text_post'=>'required',
            'image'=>'required|image'
        ]);

        try{
            $imageName = Str::random().'.'.$request->image->getClientOriginalExtension();
            Storage::disk('posts')->putFileAs('image', $request->image,$imageName);
            PostCrud::create($request->post()+['image'=>$imageName]);

            return response()->json([
                'message'=>'Post Created Successfully!!'
            ]);
        }catch(\Exception $e){
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something goes wrong while creating a Post!!'
            ],500);
        }
    }
    
}