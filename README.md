<p align="center"><a href="https://github.com/bernardoenock" target="_blank"><img src="api/public/img/graphics/LOGO.png" width="400"></a></p>

<h1 align="start">Teste Tecnico: LinkLei</h1>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Iniciar a aplicação](#iniciar-a-aplicação)
- [Sobre o teste](#sobre-o-teste)

## Features

- Laravel 8
- PHP 7.2+;
- MySQL 5.6+;
- React com TS
- libs uteis do React

## Iniciar a aplicação

- Clone o repositorio com os metodos: (https, ssh, gh cli)

- Na raiz suba o Banco de Dados com:
  `docker compose up`

## Iniciar API

- Dentro de `api/` copie o .env.example:
  `cp .env.example .env`

- Atualize o composer:
  `composer install` ou `composer update`

- Rodar as migrations:

```
php artisan migrate --seed
```

- Criar o symbolic link

```
php artisan storage:link
```

- Rodar a API localmente:

```
php artisan serve
```

## Iniciar Front End

- Dentro de `client/` rode:
  `yarn` ou `yarn install`

- Depois inicie com:
  `yarn start`

