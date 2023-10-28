import React, {useState, useEffect} from "react";
import styles from './SearchBar.module.css'

function SearchBar(props){
    const [query, setQuery] = useState("")

    function handleOnChange (event){
        event.preventDefault();
  setQuery(event.target.value)
    }
    
   
    return (
        <div className={styles.banner}>
        <input 
        onChange = {handleOnChange}
        type="text"
        value = { query }
        />
        
        <button onClick={() => props.onSearch(query)}>Search</button>
        
        </div>
    )
}
export default  SearchBar;