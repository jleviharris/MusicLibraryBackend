// Imports
const express = require('express');
const app = express();


// Middleware
app.use(express.json());



// Starting Server
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
    console.log(`Erver running on PORT: ${PORT}`);
});







