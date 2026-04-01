const express = require('express');
const router = express.Router();

// Nhúng controller vào
const productController = require('../controllers/productController');

// Khai báo đường dẫn. 
// Dấu '/' ở đây tương đương với '/api/products' (chúng ta sẽ cấu hình ở server.js)
router.get('/', productController.getAllProducts);

module.exports = router;