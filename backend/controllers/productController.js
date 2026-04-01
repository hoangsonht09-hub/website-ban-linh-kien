const db = require('../config/db'); // Nhúng file kết nối database ban nãy

// API: Lấy danh sách tất cả sản phẩm
exports.getAllProducts = async (req, res) => {
    try {
        // Viết câu lệnh SQL lấy dữ liệu
        const [products] = await db.query('SELECT * FROM PRODUCT');
        
        // Trả kết quả về cho Frontend
        res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });
    } catch (error) {
        console.error('Lỗi khi lấy sản phẩm:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Lỗi server khi lấy danh sách sản phẩm' 
        });
    }
};