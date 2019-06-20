// Bring express
const express = require('express');

// Init the connect to the DB
const connectDB = require('./config/db');

// Init app variable avec express
const app = express();

// Connection à la DB
connectDB();

// Single end point to test
app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// si aucun port, utilise 5000
const PORT = process.env.PORT || 5000;

// server start et confirme en console log
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));