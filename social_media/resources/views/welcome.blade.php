@extends('layouts.main')

@section('title', 'LinkLei')

@section('content')
      <div id="main-container" >

            <div id="btn-create-container" class="col-md-12">
                  <div id="card-create-post">
                        <button type="button" class="btn btn-secondary">
                              <a href="/post/create">Criar Post</a>
                        </button>
                  </div>
            </div>
            <div id="feed-container" >
                  <div id="posts-container" class="column">
                        @foreach($posts as $post)
                        <div id="card-post" class="card col-md-12">
                              <div id="avatar-container">
                                    <img src="/img/graphics/avatar_default.png" alt="Avatar Default">
                                    <div id="avatar-info">
                                          <h3>{{$post->autor}}</h3>
                                          <span>Publicado em {{$post->created_at}}</span>
                                    </div>
                              </div>

                              <div id="category-container">
                                    <img src="/img/graphics/feed.svg" alt="Crear Post">
                                    <p>{{$post->category}}</p>
                              </div>
                        
                              <div id="publication-container">
                                    <p>{{$post->publication}}</p>
                                    <img id="post-img" src="/img/posts/{{ $post->image }}" alt="{{ $post->publication }}">
                              </div>
                        </div>
                        @endforeach
                  </div>
            </div>
      </div>
      





@endsection