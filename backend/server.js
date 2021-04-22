require('dotenv').config({ path:'./.env'});
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

     // Set a static folder This is a middleware
     app.use(express.static('frontend/build'));

     app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
     });
}else{
   app.get('/', (req, res) => {
      res.send('Api running')
   });
}


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
