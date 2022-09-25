<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;


use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;


class PostController extends Controller
{
    public function index() {
        
        return Post::get();
    }

    // public function create() {
    //     return view('events.create');
    // }


    public function store(Request $request)
    {

        
        $request->validate([
            'autor'=>'required',
            'category'=>'required',
            'publication'=>'required',
            'image'=>'required|image'
        ]);
        try{
            
            $imageName = Str::random().'.'.$request->image->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('post/image', $request->image,$imageName);
            // Storage::url(Setting::query()->first()->putFileAs('post/image', $request->image,$imageName));
            Post::create($request->post()+['image'=>$imageName]);

            return response()->json([
                'message'=>'Post Created Successfully!!'
            ]);
        }catch(\Exception $e){
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something goes wrong while creating a post!!'
            ],500);
        }


    }

    // public function store(Request $request) {
    //     $post = new Post;

    //     $post->autor = $request->autor;
    //     $post->category = $request->category;
    //     $post->publication = $request->publication;

    //     if($request->hasFile('image') && $request->file('image')->isValid()) {

    //         $requestImage = $request->image;

    //         $extension = $requestImage->extension();

    //         $imageName = md5($requestImage->getClientOriginalName() . strtotime("now")) . "." . $extension;

    //         $requestImage->move(public_path('img/posts'), $imageName);

    //         $post->image = $imageName;

    //     }

    //     $post->save();

      
    // }
}
