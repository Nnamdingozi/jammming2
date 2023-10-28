import React, { useState } from 'react';
import './App.css';
import  SearchBar from './SearchBar';
import Track from "./Track";
import SearchResults from './SearchResults';
import PlayList from './PlayList'



function App() {
  const [searchResults, setSearchResults] = useState([])
  
  const musicList = [
    {id:1, name:'old Pirates', artist: 'Bob Maarley', album:'Rivers of Babylon' },
    {id:2, name:'People know you', artist: 'Shakira', album:'The bomb'},
    {id:3, name:'Good sin', artist: 'Burna Boy', album:'Shaking'},
    {id:4, name:'Xtra cool', artist: 'Young Jphn', album:'Cool'},
    {id:5, name:'Feel', artist: 'Kizz daniels', album:'Omo'}
  ]
  

 


function search(query){
  if(query !== "")
{const results = musicList.filter((track)=> track.toLowerCase().includes(query.toLowerCase()));
    
    setSearchResults({results})
  }
}

    

  return (
    <div>
     <h1><span style={{color:'purple'}} >JA</span><span style={{color:'rgb(235, 142, 208)', fontSize: '2.4rem'}}>MMM</span><span style={{color:'purple'}}>ING</span></h1>
    
     <SearchBar  onSearch ={search}/>
     <div className="container">
     <SearchResults searchResults = {searchResults}/>
     <PlayList/>
    
     </div>

     </div>
    
  );
}

export default App;
