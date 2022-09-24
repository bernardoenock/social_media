@extends('layouts.main')

@section('title', 'Criar Post')

@section('content')

<div id="event-create-container" class="col-md-6 offset-md-3">
    <h1>Criar Post</h1>
    <form action="/posted" method="POST" enctype="multipart/form-data">
        @csrf

        <div class="form-group">

            <!-- <label for="autor">Autor do Post</label> -->
            <input type="text" class="form-control" id="autor" name="autor" placeholder="Autor do Post"/>
        </div>

        <div class="form-group">
            <select name="category" id="category" class="form-control" placeholder="Selecione a categoria">
            <option value="">Selecione a categoria</option>
            <option value="Post">Post</option>
                <option value="Noticia">Noticia</option>
                <option value="Anuncio">Anuncio</option>
            </select>
        </div>

        <div class="form-group">
            <textarea name="publication" id="publication" class="form-control" placeholder="Escrever Publicação"></textarea>
        </div>

        <div class="form-group">
            <input type="file" id="image" name="image" class="form-control-file">

            <input type="submit" class="btn btn-primary" value="PUBLICAR">
        </div>
    </form>
    

</div>
@endsection