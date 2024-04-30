const express = require('express');
const mongoose = require('mongoose');
// const carRoutes = require('./routes/carRoutes');
// const gymRoutes = require('./routes/gymRoutes');
// const loungeRoutes = require('./routes/loungeRoutes');
// const carRoutes = require('./Routes/carRoutes');
const carRoutes = require('./Routes/carRouter')
const gymRoutes = require("./Routes/gymRouter");
const loungeRoutes = require("./Routes/loungeRouter")


const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://cnr9440:qIfy4tn6G2cUrVQ2@cluster0.qmke7pk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    {
        useNewUrlParser: true, useUnifiedTopology: true
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/car', carRoutes);
app.use('/gym', gymRoutes);
app.use('/lounge', loungeRoutes);

const PORT = 7000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
