import React from "react";
import styles from "./SearchResults.module.css"
import TrackList from "./TrackList";

function SearchResults(props){



    return (
        <div className = {styles.searchResults}>
            <h2>Result</h2>
             <TrackList
              searchResults= {props.searchResults}
              addToPlayList= {props.addToPlayList}
               /> 
        </div>
       
    )

}
export default SearchResults