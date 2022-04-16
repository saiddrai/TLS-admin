import SearchBarCSS  from "./SearchBar.module.css"

const SearchBar = () => {
    return ( <div className={SearchBarCSS.searchbar} >
        <input type="text" placeholder="Search" className={SearchBarCSS.input} />
    </div> );
}
 
export default SearchBar;