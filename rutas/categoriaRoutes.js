const express = require('express');
const router = express.Router();
const { obtenerCategorias, obtenerCategoriaPorId, crearCategoria, editarCategoria, eliminarCategoria } = require('../controladores/categoriaController');

router.get('/categorias', obtenerCategorias);
router.get('/categorias/:id', obtenerCategoriaPorId);
router.post('/categorias', crearCategoria);

router.put('/categorias/:id', editarCategoria);
router.delete('/categorias/:id', eliminarCategoria);

module.exports = router;
