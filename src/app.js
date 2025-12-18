const express = require('express');
const app = express();
const routes = require('./routes');

const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/', routes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});