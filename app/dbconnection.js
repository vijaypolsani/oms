const mysql = require('mysql');
const connection = mysql.createPool({

    host: 'robustoms.cluster-cm5yjeedny8s.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'vijay',
    password: '',
    database: 'robust_oms',
    connectionLimit: 10,
    debug: true

});
module.exports = connection;