const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

const productRoutes = require('./routes/productRoutes');

app.use('/api/products', productRoutes);

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
// const productRoutes = require('./routes/productRoutes');
// const userRoutes = require('./routes/userRoutes'); // Assurez-vous que ce fichier existe
// const orderRoutes = require('./routes/orderRoutes'); // Assurez-vous que ce fichier existe

// app.use('/api/products', productRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});