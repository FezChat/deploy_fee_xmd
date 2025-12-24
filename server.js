const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from current directory
app.use(express.static(__dirname));

// Health check endpoint for Render
app.get('/health', (req, res) => {
    res.json({ 
        status: 'ok',
        service: 'FEE XMD Dashboard',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

// All routes serve index.html (for SPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 FEE XMD Dashboard running on port ${PORT}`);
    console.log(`📊 Open: http://localhost:${PORT}`);
    console.log(`❤️  Health check: http://localhost:${PORT}/health`);
});