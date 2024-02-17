import React, { useState } from 'react';
import styles from './SearchBar.module.css';



function SearchBar(props) {


    return (
    <div className = {styles.banner}>   

      <input 
          placeholder="Enter a song name"
          onChange={props.change} 
          value = {props.query}
      /> 
        
        <button onClick={props.onClick}> search </button> 
      </div> 
    )
}
export default  SearchBar;