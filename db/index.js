let mysql = require('mysql');
const config = {
    host: '114.215.92.231',
    user: 'abecedarian',
    password : 'QbjMwcDod3+GxJNBSYDr+iEXmpg=',
    database : 'finance',
    multipleStatements: true//允许多条sql同时执行
}
const pool = mysql.createPool(config)
let query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.end()
                })
            }
        })
    })
};
module.exports = {
    query
}