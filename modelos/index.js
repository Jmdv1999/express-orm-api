const { Sequelize, Model, DataTypes, } = require('sequelize');

//Base de datos SQLite local, no es necesario crearla.
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: console.log
});

//Base de datos MySQL hay que crearla previamente y se deben configurar las credenciales y la info del server
// const sequelize = new Sequelize('api_express', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

class Producto extends Model { }
class Categoria extends Model { }

Producto.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.DECIMAL,
    cantidad: DataTypes.INTEGER
}, { sequelize, modelName: 'producto' });

Categoria.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING
}, { sequelize, modelName: 'categoria' });


//Relaciones
Categoria.hasMany(Producto, { foreignKey: 'categoriaId', as: 'productosprop' });
Producto.belongsTo(Categoria, { foreignKey: 'categoriaId', as: 'categoriaprop' });

// Exportar sequelize y los modelos
module.exports = { sequelize, Producto, Categoria };
