import React from "react";
import styles from "./SearchResults.module.css"

function SearchResults(props){
 const track =   props.searchResults.map((track) => {<li key={track.id}>{track.name} {track.artist} {track.album}</li>})
    return (
        <>
        <ul className={ styles.searchResults}>
{track}
        </ul>
        <button>+</button>
        </>
    )

}
export default SearchResults