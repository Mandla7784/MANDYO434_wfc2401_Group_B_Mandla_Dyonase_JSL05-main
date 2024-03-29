// Array of song objects
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" }, // Song details: title, artist, genre
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" }
];

// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock", // Star-Lord prefers Rock genre
    "Gamora": "Pop", // Gamora prefers Pop genre
    "Drax": "R&B", // Drax prefers R&B genre
    "Rocket": "Rock", // Rocket prefers Rock genre
    "Groot": "Pop" // Groot prefers Pop genre
};
// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    const playlists = Object.entries(guardians).map(([guardian, genre]) => {
        const playlist = songs.filter(song => song.genre === genre); // Filter songs based on guardian's preferred genre
        return { guardian, playlist };
    });

    playlists.forEach(({ guardian, playlist }) => {
        const guardianPlayList = document.createElement('div'); // Create a div for each guardian's playlist
        guardianPlayList.className = 'playlist'; // Assign a class name to the div

        const playlistHeader = document.createElement('h2'); // Create a header for the playlist
        playlistHeader.textContent = `${guardian}'s Playlist:`; // Set the header text

        const playlistSongs = document.createElement('ul'); // Create an unordered list for songs

        playlist.forEach(song => {
            const songItem = document.createElement('li'); // Create a list item for each song
            songItem.innerHTML = `<span class="song-title">${song.title}</span> by ${song.artist}`; // Set the song details

            playlistSongs.appendChild(songItem); // Add the song to the playlist
        });

        guardianPlayList.appendChild(playlistHeader); // Add the header to the guardian's playlist
        guardianPlayList.appendChild(playlistSongs); // Add the songs to the playlist

        document.getElementById('playlists').appendChild(guardianPlayList); // Append the playlist to the 'playlists' element in the HTML
    });
}

// Generate playlists based on Guardians' preferred genres
generatePlaylist(guardians, songs); // Call the function to generate playlists