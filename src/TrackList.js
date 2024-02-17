import React from "react";
import Track from "./Track";
import { useState } from "react";




    function TrackList(props) {
        // const [songs, setSongs] = useState(props.songs)
     
        // function addSongs() {
        //     const newSong = props.searchResults;
        //     setSongs(...songs, newSong);
        //     console.log(typeof(songs))

        // };
        // function removeSongs(id){
        //     const updatedSongs = songs.filter(song => song.id !== id);
        //     setSongs(updatedSongs)
        // };
        return (
            <Track 
            searchResults={props.searchResults}
    addToPlayList={ props.addToPlayList}/>
        
          
    
             
        )
    }
    export default TrackList