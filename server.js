const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 6969;

// Static files setup
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/apps', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'apps.html'));
});

app.get('/browser', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'browser.html'));
});

app.get('/clickgame', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'clickgame.html'));
});

app.get('/static', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'games', 'static', 'index.html'));
});


app.get('/google817723066b7e6aa8', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'google817723066b7e6aa8.html'));
});

app.get('/games', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'games.html'));
});

app.get('/links', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'links.html'));
});

app.get('/append', async (req, res, next) => {
    try {
        let { password, url } = req.query;
        url = atob(url);
        if (password === encryptionpassword) {
            if (await checkIfBlocked(url)) {
                if (!unblockedUrls.includes(url)) unblockedUrls.push(url);
            } else if (unblockedUrls.includes(url)) {
                unblockedUrls = unblockedUrls.filter(item => item !== url);
            }
            res.send(unblockedUrls.join("\n"));
        } else {
            res.status(403).send("Forbidden");
        }
    } catch (error) {
        console.error("Append route error:", error.message);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});