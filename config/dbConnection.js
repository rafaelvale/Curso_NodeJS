var mysql = require('mysql');


var connMysql = function() {

    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1428',
        database: 'portal_noticias'
    });
}
module.exports = function() {
    return connMysql;
}