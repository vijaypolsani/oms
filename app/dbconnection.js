const mysql = require('mysql');
const connection = mysql.createPool({

    host: '',
    port: 3306,
    user: '',
    password: '',
    database: 'robust_oms',
    connectionLimit: 10,
    debug: true

});
module.exports = connection;