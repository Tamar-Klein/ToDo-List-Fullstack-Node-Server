require('dotenv').config();
const express = require('express');
const axios = require('axios'); // בשביל לשלוף מידע מה-Render API
const app = express();

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.RENDER_API_KEY;

app.get('/services', async (req, res) => {
    try {
        const response = await axios.get('https://api.render.com/v1/services', {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
        });
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
