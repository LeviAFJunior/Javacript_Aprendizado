exports.middlewareGlobal = (req, res, next) => {
    
    // if(req.body.cliente) {
    //     req.body.cliente = req.body.cliente.replace('Alves', 'Não use Alves');
    //     console.log();
    //     console.log(`Vi que você postou ${req.body.cliente}`);
    //     console.log();
    // }

    res.locals.umaVariavelLocal = 'Este é o valor da variável local.';
    next();
}

exports.outroMiddleware = (req, res, next) => {
    next();
}