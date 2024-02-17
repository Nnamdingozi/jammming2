import React from "react";
import styles from './PlayList.module.css';
import TrackList from "./TrackList";

function PlayList(props) {
    return (
        <div className={styles.playList}>
            <input placeholder="playlist Name" /> 
            {props.playListTrack}
            
            <button className={styles.saveButton}>SAVE TO SPOTIFY</button>
        </div>


    )
};

export default PlayList