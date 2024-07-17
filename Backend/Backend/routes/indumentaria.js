var express = require('express');
var router = express.Router();

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

var mysql = require('mysql'); // importo libreria
// genero coneccion
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'productos'
});

connection.connect();

const fs = require('fs');

/* Consulta General de Productos */
router.get('/', function (req, res, next) {
    connection.query('select * from indumentaria', function (error, results, fields) {
        if (error) throw error;
        res.render('index', {data: results});
    });
});

/* Dashboard de Productos */
router.get('/listado/', function (req, res, next) {
    let sentencia = 'select * from indumentaria';
    connection.query(sentencia, function (error, results, fields) {
        if (error) throw error;
        res.render('1_listadoIndu', { data: results });
    });
});

/* Listado con filtro por id */
router.get('/listado/:id', function (req, res, next) {
    let sentencia = 'select * from indumentaria where id = ' + req.params.id;
    connection.query(sentencia, function (error, results, fields) {
        if (error) throw error;
        res.render('1_listadoIndu', { data: results });
    });
});

/* Alta de Producto */
router.get('/alta', function (req, res, next) {
    res.render('2_formularioAlta');
});

router.post('/alta', upload.single('imagen'), async function (req, res, next) {
    // defino sentencia de sql
    let sentencia = `insert into indumentaria (tipo, nombre, descripcion, precio, imagen) values('${req.body.tipo}', '${req.body.nombre}', '${req.body.descripcion}', '${req.body.precio}', '/images/${req.file.originalname}')`;
    connection.query(sentencia, function (error, results, fields) {
        if (error) throw error;
        res.render("Finalizado", { mensaje: "Producto ingresado exitosamente" });
    });
    fs.createReadStream("./uploads/" + req.file.filename).pipe(fs.createWriteStream("./public/images/" + req.file.originalname));
});

/* Modificación de Producto */
router.get('/modificar/:id', function (req, res, next) {
    connection.query('select * from indumentaria where id = ' + req.params.id, function (error, results, fields) {
        if (error) throw error;
        res.render('3_modificar', { data: results });
    });
});

/* Modificar Producto */
router.post('/modificar/:id', upload.single('imagen'), async function (req, res, next) {
    let sentencia;
    if (req.file) {
        sentencia = `update indumentaria set tipo = '${req.body.tipo}', nombre = '${req.body.nombre}', descripcion = '${req.body.descripcion}', precio = '${req.body.precio}', imagen = '/images/${req.file.originalname}' where id = ${req.params.id}`;
        fs.createReadStream("./uploads/" + req.file.filename).pipe(fs.createWriteStream("./public/images/" + req.file.originalname));
    } else {
        sentencia = `update indumentaria set tipo = '${req.body.tipo}', nombre = '${req.body.nombre}', descripcion = '${req.body.descripcion}', precio = '${req.body.precio}' where id = ${req.params.id}`;
    }
    connection.query(sentencia, function (error, results, fields) {
        if (error) throw error;
        res.render("Finalizado", { mensaje: "Producto modificado exitosamente" });
    });
});

/* Eliminar Producto */
router.get('/eliminar/:id', function (req, res, next) {
    connection.query('select * from indumentaria where id = ' + req.params.id, function (error, results, fields) {
        if (error) throw error;
        res.render('4_formularioEliminar', { data: results });
    });
});

router.post('/eliminar/:id', function (req, res, next) {
    connection.query('delete from indumentaria where id = ' + req.params.id, function (error, results, fields) {
        if (error) throw error;
        res.render('finalizado', { mensaje: "El producto fue eliminado exitosamente" });
    });
});

module.exports = router;
