import mysql from 'mysql';
var connection = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'training'
})
export default connection;

