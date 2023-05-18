const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

const port = 8085

app.use(express.static(__dirname+'/public'))

app.set('views', path.join(__dirname + '/public/views'))
app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/public/views/partials');

app.get('/', (req, res) => {
    res.render('disponibilidad', {
        titulo: 'Disponibilidad',
        nombre: ''
    })
})

app.listen(port, () => {
    console.log(`Escuchando por el puerto ${port}`)
})
