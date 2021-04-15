const mysql = require('mysql')
exports.mysql = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: '3306',
  password: 'kiwi_2020',
  database: 'spider'
})