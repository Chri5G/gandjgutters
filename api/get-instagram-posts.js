import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = 3000;

const ACCESS_TOKEN = "YOUR_ACCESS_TOKEN";
const INSTAGRAM_API_URL = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${ACCESS_TOKEN}`;

app.get("/instagram", async (req, res) => {
    try {
        const response = await fetch(INSTAGRAM_API_URL);
        const data = await response.json();
        res.json(data.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch Instagram posts" });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));