import {React, useState} from "react";
import "./searchbar.css";
import { SearchIcon } from "../Service/searchIcon/SearchIcon";
import { ForwardIcon } from "../Service/searchIcon/ForwardIcon";


const Searchbar = ({placeHolder,handleInput}) => {

    const[wordEntered, setWordEntered] = useState("");

    const handleSubmit = () => {
        handleInput(wordEntered);
        setWordEntered("");
    }


    return(
        <div className="cont">
            <div className="searchbar">

            <input type="text" 
            className="input-field"
            placeholder= {placeHolder}
            value={wordEntered}
            onChange={(event) => {
                setWordEntered(event.target.value)
            }}
             />
             
             <div className="search-icon">
              {wordEntered.length === 0 ?(
                <SearchIcon />
              ): (
                <div className="clearbtn" onClick={handleSubmit}>
                     <ForwardIcon />
                </div>
               
              )
            }  
            </div>

            </div>
 

        </div>
    )
}
export default Searchbar;