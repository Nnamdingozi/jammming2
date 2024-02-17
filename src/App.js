import React, { useState } from 'react';
import './App.css';
import SearchResults from './SearchResults';
import PlayList from './PlayList'
import Data from './mock-data';
import myData from './mock-data';
import SearchBar from './SearchBar';
import { useParams } from 'react-router-dom';


function App() {
  const [searchResultsArray, setSearchResultsArray] = useState([]);
  const [query, setQuery] = useState('');
  const [playListTrack, setPlaylistTrack] = useState([])
  // let {id} = useParams()

  //   id = myData.id


  function handleChange(e) {
    setQuery(e.target.value)
  }


  const handleSearchClick = () => {
    if(query === "") {
      setSearchResultsArray(myData)
    } else { const result = myData?.filter((song) => Object.values(song).toString().toLowerCase().includes(query.toLowerCase()));
      setSearchResultsArray(result)
      console.log(result)
    }
   
   
    
    
  }

  const addToPlayList = (e) => {
    const id = e.currentTarget.value;
    const appendToPlaylist = searchResultsArray.filter(item => item.id === id);
    setPlaylistTrack((prev => [...prev, appendToPlaylist]))
    console.log("itemClicked")

  }


  // function handleSearchClick(){
  //   const result = Data?.filter((song)=> song.name.toString().toLowerCase().includes(query.toLowerCase()));
  //   setQuery('');
  //   setSearchResults(result)
  //   console.log(result)


  //   }
  //   function addTrack(track){
  //     setPlaylistTrack(prev => [...prev, track])
  //   }
  //   function removeTrack(track){
  //     setPlaylistTrack(prev => prev.filter(curr => curr.id !== track.id))
  //   }

  return (
    <div>
      <h1><span style={{ color: 'purple' }} >JA</span><span style={{ color: 'rgb(235, 142, 208)', fontSize: '2.4rem' }}>MMM</span><span style={{ color: 'purple' }}>ING</span></h1>
      {/* <SearchBar
        query = {query}
        handleChange ={handleChange}
        onClick = {handleSearchClick}
     />

     <div className="container">
     <SearchResults searchResults = {searchResults} onAdd={addTrack}/>
     <PlayList 
          searchResults ={searchResults}
          onRemove={removeTrack}
          playListTrack = {playListTrack}
     />
    
     </div> */}

      <h1 style={{ color: 'purple' }} >{playListTrack}</h1>

 
      <SearchBar
        input={query}
        change={handleChange}
        onClick={handleSearchClick}
      />

<div className="container">
      <SearchResults
        searchResults={searchResultsArray}
        addToPlayList={addToPlayList}
      />

      <PlayList playListTrack={playListTrack}/>
      </div>

      {/* {
        searchResultsArray.map((data) => (
          <>
            <p>{data.artist}</p>
            <button onClick={addToPlayList}>+</button>

          </>
        ))
      }


 */}





    </div>

  );
}


export default App;

