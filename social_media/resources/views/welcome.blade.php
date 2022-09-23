@extends('layouts.main')

@section('title', 'LinkLei')

@section('content')

      <h1>Link Lei</h1>
      <img src="/img/graphics/avatar_default.png" alt="Avatar Default">
      

      <div id="feed-container" class="col-md-12">
            <h2>Meu Feed</h2>
            <div id="posts-container" class="column">
                  @foreach($posts as $post)
                  <div class="card col-md-12">
                        <h3>{{$post->autor}}</h3>
                        <span>{{$post->created_at}}</span>
                        <p>{{$post->category}}</p>
                        <textarea>{{$post->publication}}</textarea>
                        <img src="/img/posts/{{ $post->image }}" alt="{{ $post->publication }}">

                  <p>{{$post->autor}} -- {{$post->publication}}</p>
                  </div>
                  @endforeach
            </div>
      </div>





@endsection