// Imports
const express = require('express');
const repoContext = require("./repository/repository-wrapper");

const app = express();


// Middleware
app.use(express.json());


// Endpoints
// http://localhost:5005 (BASE URL)



// GET all songs
// http://localhost:5005/api/songs
app.get("/api/songs", (req, res) => {
    const songs = repoContext.songs.findAllSongs();
    res.send(songs);
});

// Get song by id
// http://localhost:5005/api/songs/:id
app.get("/api/songs/:id", (req, res) => {
    const id = req.params.id;
    const song = repoContext.songs.findSongById(id);
    return res.send(song);
});


// Starting Server
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
    console.log(`Erver running on PORT: ${PORT}`);
});







