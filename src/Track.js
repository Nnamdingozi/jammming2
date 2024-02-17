import React from "react";
import Data from './mock-data';
import { useState } from "react";
import styles from './Track.module.css';

function Track({searchResults, addToPlayList}){



return (
<div>
{
        searchResults.map((data)=>(
          <>
          <div  className={styles.banner}>
          <p> Song Name: {data.name}</p>
            <p> Artist: {data.artist} <buttton className={styles.playListBtn} onClick={addToPlayList}>+</buttton></p>
            <p> Album: {data.album}</p> 
            </div>
          </>
        ))
      }
</div>
)
}
export default Track