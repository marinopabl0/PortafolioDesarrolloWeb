require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const app= express();


const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/components')

app.use(express.static('public'));


//Elementos de la pagina principal
app.get('/', function(req, res){
    res.render('home', {
    });
});

app.get('/contact', function(req, res){
    res.render('contact', {
    });
});

app.get('/portafolio', function(req, res){
    res.render('portafolio', {
    });
});

//Details
app.get('/portafolio-profinal', function(req, res){
    res.render('portafolio-profinal', {
    });
});

app.get('/portafolio-detalle-01', function(req, res){
    res.render('portafolio-detalle-01', {
    });
});

app.get('/portafolio-detalle-02', function(req, res){
    res.render('portafolio-detalle-02', {
    });
});

app.get('/portafolio-detalle-03', function(req, res){
    res.render('portafolio-detalle-03', {
    });
});

app.get('*', function(req, res){
    res.sendFile(__dirname+ '/public/404.html');
   
});

app.listen(port, () => {
    console.log(`Ejemplo app escuchando desde http://localhost:${port}`);
})


//nodemon app9