const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Khởi tạo app Express
const app = express();

// Middleware
app.use(cors()); // Cho phép Frontend (React/HTML) gọi API mà không bị chặn lỗi CORS
app.use(express.json()); // Giúp server đọc được dữ liệu JSON từ Frontend gửi lên
app.use(express.urlencoded({ extended: true }));

// Route test cơ bản để xem server đã chạy chưa
app.get('/', (req, res) => {
    res.json({ message: "Chào mừng đến với API Quản lý linh kiện máy tính!" });
});

// Khai báo các Routes chính thức
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

// Lấy PORT từ file .env, nếu không có thì mặc định chạy port 5000
const PORT = process.env.PORT || 5000;

// Khởi động server
app.listen(PORT, () => {
    console.log(`🚀 Server backend đang chạy thành công tại http://localhost:${PORT}`);
});