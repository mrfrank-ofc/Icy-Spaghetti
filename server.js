const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static('public'));

// GitHub API endpoint to check if the user has forked the repo
app.post('/check-fork', async (req, res) => {
    const { username } = req.body;
    const repo = 'mrfrankzw/SUBZERO-BOT';

    try {
        const response = await axios.get(`https://api.github.com/repos/${repo}/forks`);
        const forks = response.data;
        const hasForked = forks.some(fork => fork.owner.login === username);

        if (hasForked) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    } catch (error) {
        console.error('GitHub API error:', error.message);
        res.status(500).json({ error: 'Failed to check fork status' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
