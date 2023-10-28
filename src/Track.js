import React from "react";

function Track(props){
props.musicList.map((track)=> {
    (<div>
        <h4>{track.name}</h4>
        <p>{track.artist}</p>
        <p>{track.album}</p>
        <button>+</button>
    </div>)
})
}
export default Track