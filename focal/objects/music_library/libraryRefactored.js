const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
               p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
printPlaylists: function() {
  for (let key in this) {
    let playlistId = key;
    let playlistName = this.playlists[key].name;
    let playlistLength = this.playlists[key].tracks.length;

    console.log(`${playlistId}: ${playlistName} - ${playlistLength} tracks/n`);
  }
 };

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
printTracks: function() {
  for (let key in this.tracks) {
    let trackId = key;
    let trackName = this.tracks[key].name;
    let trackArtist = this.tracks[key].artist;
    let trackAlbum = this.tracks[key].album;
    
    console.log(`${trackId}: ${trackName} by ${trackArtist} (${trackAlbum})/n`);
  }
};

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
printPlaylist: function(playlistId) {
  let playlistName = playlistId.name;
  let playlistLength = playlistId.tracks.length;

  console.log(`${playlistId.id}: ${playlistName} - ${playlistLength} tracks`);

  for (let key of playlistId.tracks) {
    let trackId = this.tracks[key].id;
    let trackName = this.tracks[key].name;
    let trackArtist = this.tracks[key].artist;
    let trackAlbum = this.tracks[key].album;

    console.log(`${trackId}: ${trackName} by ${trackArtist} (${trackAlbum})`);
  }
};

// adds an existing track to an existing playlist
addTrackToPlaylist: function(trackId, playlistId) {
  playlistId.tracks.push(trackId);
};

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
generateUid: function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// adds a track to the library
addTrack: function(name, artist, album) {
  let newTrackNumber = this.generateUid();
  this.tracks[newTrackNumber] = {
    id: newTrackNumber,
    name: name,
    artist: artist,
    album: album
  };  
};

// adds a playlist to the library
addPlaylist: function(name) {
  let newPlaylistNumber = this.generateUid();
  this.playlists[newPlaylistNumber] = {
    id: newPlaylistNumber,
    name: name
  }
};

library.printPlaylists();
library.printTracks();
library.printPlaylist(library.playlists.p01);

library.addTrackToPlaylist("t01", library.playlists.p02);
console.log(library.playlists);

library.addTrack("Shawn Peter Raul Mendes", "Shawn Mendes" ,"Wonder");
console.log(library.tracks);

library.addPlaylist("New play list");
console.log(library.playlists);


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}