const { Categoria } = require('../modelos/index');

const obtenerCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.findAll();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ message: 'error del servidor', err: error });
    }
};

const obtenerCategoriaPorId = async (req, res) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id);
        if (categoria) {
            res.json(categoria);
        } else {
            res.status(404).json({ message: 'Categoria no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'error del servidor', err: error });
    }
};

const crearCategoria= async (req, res) => {
    try {
        const categoria = await Categoria.create(req.body);
        res.json(categoria);
    } catch (error) {
        res.status(500).json({ message: 'error del servidor', err: error });
    }
};

const editarCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id);
        if (categoria) {
            await categoria.update(req.body);
            res.json(categoria);
        } else {
            res.status(404).json({ message: 'Categoria no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'error del servidor', err: error })
    }
}

const eliminarCategoria= async (req, res) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id);
        if (categoria) {
            await categoria.destroy();
            res.json({ message: 'Categoria Eliminado' });
        } else {
            res.status(404).json({ message: 'Categoria no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'error del servidor', err: error })
    }
}

module.exports = {
    obtenerCategorias,
    obtenerCategoriaPorId,
    crearCategoria,
    editarCategoria,
    eliminarCategoria
};