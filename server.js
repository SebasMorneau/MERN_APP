// Bring express
const express = require('express');
// Init app variable avec express
const app = express();
// Single end point to test
app.get('/', (req, res) => res.send('API Running'));
// si aucun port, utilise 5000
const PORT = process.env.PORT || 5000;
// server start et confirme en console log
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));