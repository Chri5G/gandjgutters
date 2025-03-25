const ACCESS_TOKEN = "YOUR_ACCESS_TOKEN"; // Replace with your valid token
const INSTAGRAM_API_URL = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${ACCESS_TOKEN}`;

async function fetchInstagramPosts() {
    try {
        const response = await fetch(INSTAGRAM_API_URL);
        if (!response.ok) throw new Error("Failed to fetch Instagram posts");

        const data = await response.json();
        console.log("Instagram Posts:", data);

        return data.data; // Return posts array
    } catch (error) {
        console.error("Error fetching Instagram posts:", error);
        return [];
    }
}

// Example: Call the function and display posts
fetchInstagramPosts().then(posts => {
    posts.forEach(post => {
        console.log(`📸 ${post.caption}`);
        console.log(`🔗 ${post.permalink}`);
    });
});