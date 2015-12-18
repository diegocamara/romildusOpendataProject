var models = require('../models');

exports.obterCategorias = function(req, res){

    models.Categoria.find(function(err, data){

      if(err){
        throw err;
      }

      res.send(data);

    });

}

exports.obterLocaisBaresERestaurantes = function(req, res){

  var page = parseInt(req.query.page);
  var size = parseInt(req.query.size);
  var skip = (page > 0) ? (page - 1) * size : 0

  models.Restaurante.find(null, null,
    {skip:skip,
     limit:size
    },function(err, data){

        models.Restaurante.count(function(err, count){

        if(err){
          throw err;
        }

        var result = {
          numeroDeRegistros:count,       
          resultado: data
        }

        res.send(result);

      });

  });

}
