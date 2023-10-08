import React from "react";
import styles from'./SearchBar.module.css';

function SearchBar(props){
return (
    <button 
    className={styles.search}
    >
{props.name}

    </button>
)
};
export default SearchBar;