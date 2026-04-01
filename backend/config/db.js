const mysql = require('mysql2/promise');
require('dotenv').config();

// Tạo pool kết nối tới database
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test thử kết nối
pool.getConnection()
    .then(connection => {
        console.log('✅ Đã kết nối thành công với MySQL Database!');
        connection.release();
    })
    .catch(err => {
        console.error('❌ Lỗi kết nối Database:', err.message);
    });

module.exports = pool;