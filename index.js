const express = require('express');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3001;
const COINCAP_API_BASE_URL = 'https://api.coincap.io/v2';

app.use(cors());

// Serve the openapi.yaml and ai-plugin.json static files from the root directory
app.use('/openapi.yml', express.static('openapi.yml'));
app.use('/legal_info.html', express.static('legal_info.html'));
app.use('/.well-known/ai-plugin.json', express.static('ai-plugin.json'));

// Retrieve a list of cryptocurrencies
app.get('/assets', async (req, res) => {
    try {
        const response = await fetch(`${COINCAP_API_BASE_URL}/assets${req.query.search ? `?search=${req.query.search}`: ''}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving cryptocurrencies.' });
    }
});

// Retrieve information about a specific cryptocurrency
app.get('/asset/:id', async (req, res) => {
    const assetId = req.params.id;
    try {
        const response = await fetch(`${COINCAP_API_BASE_URL}/assets/${assetId}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving the cryptocurrency information.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});