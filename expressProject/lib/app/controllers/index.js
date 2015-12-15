var models = require('../models');

exports.index = function(req, res){
  res.render('index');
}

exports.obterCategorias = function(req, res){

    models.Categoria.find(function(err, data){

      if(err){
        throw err;
      }

      res.send(data);

    });

}
