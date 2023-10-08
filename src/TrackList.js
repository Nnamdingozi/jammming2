import React from "react";
import styles from './TrackList.module.css'
import SearchBar from "./SearchBar";
import Track from "./Track";


function TrackList(props){
    return(
        <>
        <div className={styles.trackList}>
           <Track musicList ={props.musicList }
           onClick={props.onClick} 
           />
        <SearchBar name={'Save to AudioMax'} />
        </div>
        
        </>
    );
}
export default TrackList;