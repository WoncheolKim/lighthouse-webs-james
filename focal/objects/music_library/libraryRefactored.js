// I spent a lot of time to find some of errors here.
// It was all about comma(,). I need to focus more and more.

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
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
printPlaylists: function () {
  for (let key in this.playlists) {
    let playlistNumber = key;
    let name = this.playlists[key].name;
    let numberTracks = this.playlists[key].tracks.length;
    console.log(`${playlistNumber}: ${name} - ${numberTracks} tracks`);
  }
},
// printPlaylists();


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

printTracks: function () {
  for (let key in this.tracks) {
    let trackId = key;
    let trackName = this.tracks[key].name;
    let trackArtist = this.tracks[key].artist;
    let trackAlbum = this.tracks[key].album;
    console.log(`${trackId}: ${trackName} by ${trackArtist} (${trackAlbum})/n`);
  }
},
//printTracks();


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
printPlaylist: function(playlistId) {
  let playlistName = this.playlists[playlistId].name;
  let numberTracks = this.playlists[playlistId].tracks.length;
  console.log(`${playlistId}: ${playlistName} - ${numberTracks} tracks`);

  for (let key of this.playlists[playlistId].tracks) {
    let trackId = this.tracks[key].id;
    let trackName = this.tracks[key].name;
    let trackArtist = this.tracks[key].artist;
    let trackAlbum = this.tracks[key].album;

    console.log(`${trackId}: ${trackName} by ${trackArtist} (${trackAlbum})`);
  }
},
// printPlaylist("p01")


// adds an existing track to an existing playlist
addTrackToPlaylist: function (trackId, playlistId) {
  this.playlists[playlistId].tracks.push(trackId);
  console.log(`${trackId} was added to playlist ${playlistId}`);
},
// addTrackToPlaylist("t03", "p02");


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
generateUid: function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},

// adds a track to the library
addTrack: function(name, artist, album) {
  let uniqueId = this.generateUid();
  this.tracks[uniqueId] = {
    id: uniqueId,
    name: name,
    artist: artist,
    album: album
  };  
},
// addTrack("Shawn Peter Raul Mendes", "Shawn Mendes" ,"Wonder")

// adds a playlist to the library
addPlaylist: function(name) {
  let uniqueId = this.generateUid();
  this.playlists[uniqueId] = {
    id: uniqueId,
    name: name,
    tracks: []
  };
},

// addPlaylist("Sun");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
printSearchResults: function(query) {

}
}

library.printPlaylists();
library.printTracks();
library.printPlaylist('p01');
library.addTrackToPlaylist('t03', 'p02');
console.log(library.playlists);
console.log("Add Track:   " ); library.addTrack('low rider', 'War', 'WCANT');
console.log(library.tracks);
console.log("Add Playlist  :   " ); library.addPlaylist('my music');
console.log(library.playlists);

