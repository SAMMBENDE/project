require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require("./routes/productRoutes");
const path = require('path');

connectDB();

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);


// Serve static assets if in production
if(process.env.NODE_ENV ==='production') {
     // Set a static folder
     app.use(express.static('client/build'));

     app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
     });
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));