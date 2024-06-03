const express = require('express');
const app = express();

// Handle the Discord callback (GitHub Pages will handle the port)
app.get('/callback', (req, res) => {
    try {
        // Extract the authorization code from the query parameters
        const authorizationCode = req.query.code;

        // Now you have the authorization code!
        // You can proceed to exchange it for an access token (next step).

        // Example: Log the authorization code
        console.log('Authorization code:', authorizationCode);

        // You can customize the response or redirect the user as needed
        res.send('Authorization successful!'); // Customize this message
    } catch (error) {
        console.error('Error handling callback:', error.message);
        res.status(500).send('Error during authorization.');
    }
});

// Start the server
const port = process.env.PORT || 3000; // Use the environment port or 3000
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
