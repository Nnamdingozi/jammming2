import React from "react";
import styles from'./SearchBar.module.css';

function SearchBar(props){
return (
    <div className={styles.search}>
<p>{props.name}</p>

    </div>
)
};
export default SearchBar;