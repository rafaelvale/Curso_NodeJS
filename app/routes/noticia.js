module.exports = function(app) {
    app.get('/noticias', function(req, res) {
        var connection = app.config.dbConnection()

        var noticiasModel = app.app.models.noticiasModel

        noticiasModel.getNoticia(connection, function(error, result) {
            res.render('noticias/noticia', { noticia: result })
        })
    })
}