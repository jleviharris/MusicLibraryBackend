// Imports
const express = require('express');
const app = express();


// Middleware
app.use(express.json());

// Endpoints
// http://localhost:5005 (BASE URL)

// GET 
// http://localhost:5005/
app.get("/songs", (req, res) => {
    console.log(req.headers)
    res.send("This is a response")
});



// Starting Server
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
    console.log(`Erver running on PORT: ${PORT}`);
});







