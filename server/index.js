// index.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const bookingRoutes = require('./routes/bookingRoutes');
const dbConfig = require('./config/dbConfig');

// Connect to MongoDB
dbConfig.connect();

// Middleware
app.use(cors());
app.use(bodyParser.json());


app.use('/api/bookings', bookingRoutes);

// Start server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
