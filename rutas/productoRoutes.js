const express = require('express');
const router = express.Router();
const { obtenerProductos, obtenerProductoPorId, crearProducto, editarProducto, eliminarProducto } = require('../controladores/productoController');

router.get('/productos', obtenerProductos);
router.get('/productos/:id', obtenerProductoPorId);
router.post('/productos', crearProducto);

router.put('/productos/:id', editarProducto);
router.delete('/productos/:id', eliminarProducto);

module.exports = router;
