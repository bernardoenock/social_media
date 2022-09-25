<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Post;

class PostController extends Controller
{
    public function index() {
        
        return Post::get();
    }

    public function create() {
        return view('events.create');
    }

    public function store(Request $request) {
        $post = new Post;

        $post->autor = $request->autor;
        $post->category = $request->category;
        $post->publication = $request->publication;

        if($request->hasFile('image') && $request->file('image')->isValid()) {

            $requestImage = $request->image;

            $extension = $requestImage->extension();

            $imageName = md5($requestImage->getClientOriginalName() . strtotime("now")) . "." . $extension;

            $requestImage->move(public_path('img/posts'), $imageName);

            $post->image = $imageName;

        }

        $post->save();

        // return redirect('/');
    }
}
