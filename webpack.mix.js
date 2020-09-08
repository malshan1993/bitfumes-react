let mix = require('laravel-mix');

const tailwindcss = require('tailwindcss');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

// mix.scripts('src/js/app.js', 'dist/js/')
mix.sass('src/scss/app.scss', 'public/css/')
   .options({
        processCssUrls: false,
        postCss: [ 
            tailwindcss('tailwind.config.js') 
        ],
    });