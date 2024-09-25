const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const {sequelize} = require('./modelos/index')

const productoRoutes = require('./rutas/productoRoutes')
const categoriaRoutes = require('./rutas/categoriaRoutes')


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use('/api', productoRoutes); 
app.use('/api',categoriaRoutes); 

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
}).catch(error => {
    console.error('Unable to sync database:', error);
});