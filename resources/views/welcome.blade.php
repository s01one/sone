<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>sOne</title>
    <meta name="description" content="sOne System based on Laravel" />
    <meta name="keywords" content="sone, sone core, laravel" />
    @vite('resources/scss/app.scss')
</head>
<body class="antialiased">
<div id="app">
    <welcome
        engine-version="v1.0.0"
        php-version="v{{ PHP_VERSION }}"
        laravel-version="v{{ app()->version() }}"
    ></welcome>
</div>

@vite('resources/js/app.js')
</body>
</html>
