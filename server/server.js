require('./config/config');

//npm install express --save
const express = require('express');
const app = express();

//npm install body-parser --save
const bodyParser = require('body-parser');

//parser application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    //parse application/json 
app.use(bodyParser.json())



app.get('/usuario', function(req, res) {
    res.json('Get Usuario');
})

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });

    } else {

        res.json({
            persona: body
        });
    }

})

app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;

    res.json({
        id //<= es igual a id: id
    });
})

app.delete('/usuario', function(req, res) {
    res.json('Delete Usuario');
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
})