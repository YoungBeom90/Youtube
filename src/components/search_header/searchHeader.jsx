import React, {useRef} from 'react'
import styles from './search_header.module.css';

const SearchHeader = ({onSearch}) => {
    const inputRef = useRef();

    const handleSearch = () => {
        const value = inputRef.current.value;
        console.log(value);
        onSearch(value);
    }
    const onClick = () => {
        // console.log("onClick");
        handleSearch();
    }

    const onKeyPress = (event) => {
        // console.log("onKeyPress");
        if(event.key === 'Enter') {
            handleSearch();
        }
    }

    const onClickLogo = () => {
        console.log("onClickLogo");
        window.location.href="/";
    }
    
    return (
        <header className={styles.header}>
            <div className={styles.logo} onClick={onClickLogo}>
                <img className={styles.image} src="/images/logo.png" alt="logo" />
                <h1 className={styles.title}>YouTube</h1>
            </div>
            <input ref={inputRef} className={styles.input} type="search" placeholder='Search...' onKeyPress={onKeyPress} />
            <button className={styles.button} type='submit' onClick={onClick}>
                <img className={styles.buttonImg} src="/images/search.png" alt="search" />
            </button>
        </header>
    )
}

export default SearchHeader;
