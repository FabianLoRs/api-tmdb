import { Search as SearchIcon } from "react-bootstrap-icons";
import style from "./style.module.css";

const SearchBar = ({ onSubmit }) => {

  function submit(event) {
    if (condition) {
      
    }
  }

  return (
    <>
      <SearchBar size={27} className={style.icon} />
      <input
        onKeyUp={submit}
        className={style.input}
        type="text"
        placeholder={"Search a TV show you may like"}   
      />
    </>
  );
}



export default SearchBar;