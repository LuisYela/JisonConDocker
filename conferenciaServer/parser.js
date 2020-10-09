
var parser = require('./gramatica');

function analizar(req, res) {
    const entrada  = req.body.operaciones;
    console.log(entrada);
    if(req.err) throw err;
    return res.send({resultado: parser.parse(entrada.toString())});
}

module.exports = analizar;