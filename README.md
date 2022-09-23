# social_media

## Criar Banco de Dados MySql

_./_

docker compose up

## Rodar Servidor

_social_media/_

composer update

cp .env.example .env

php artisan key:generate

php artisan migrate

php artisan serve
