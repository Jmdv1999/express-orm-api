const { Producto } = require('../modelos/index');

const obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: 'error del servidor', err: error });
    }
};

const obtenerProductoPorId = async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (producto) {
            res.json(producto);
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'error del servidor', err: error });
    }
};

const crearProducto = async (req, res) => {
    try {
        const producto = await Producto.create(req.body);
        res.json(producto);
    } catch (error) {
        res.status(500).json({ message: 'error del servidor', err: error });
    }
};

const editarProducto = async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (producto) {
            await producto.update(req.body);
            res.json(producto);
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'error del servidor', err: error })
    }
}

const eliminarProducto = async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (producto) {
            await producto.destroy();
            res.json({ message: 'Producto Eliminado' });
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'error del servidor', err: error })
    }
}

module.exports = {
    obtenerProductos,
    obtenerProductoPorId,
    crearProducto,
    editarProducto,
    eliminarProducto
};