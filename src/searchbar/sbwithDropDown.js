import { React, useState } from "react";
import "./searchbar.css";
import { SearchIcon } from "../Service/searchIcon/SearchIcon";
import { ForwardIcon } from "../Service/searchIcon/ForwardIcon";


const DropDown= ({placeHolder,data}) => {

    const[filterData,setFilterData] = useState([]);
    const[searchWord,setSearchWord] = useState("");

    const handleFilter= (event) => {

        const userInput = event.target.value;
        setSearchWord(userInput);

        const newFilterData = data.filter((value) => {
            return value.title.toLowerCase().includes(userInput.toLowerCase())
        });

        if(searchWord === 0) {
            setFilterData([])
        }else {
            setFilterData(newFilterData)
        }

    }

    const handleSubmit = () => {
        setFilterData([]);
        setSearchWord("");

    }
    

    return(
        <div className="cont">

            <div className="searchbar">

            <input type="text"
             className="input-field"
            placeholder= {placeHolder}
            onChange={handleFilter}
            onClick={() => setFilterData(data)}
            value={searchWord}
            />

            <div className="search-icon">
              {filterData.length === 0 ?(
                <SearchIcon />
              ): (
                <div className="clearbtn" onClick={handleSubmit}>
                     X
                </div>
               
              )
            }  
            </div>

            </div>

            {filterData.length !==0 && (
                <div className="dropdown">
                {filterData.map((book,index) => {
                    return <a className="book-title"
                            key={index}
                            href={book.link} target="_blank"
                            onClick={() => (book.link)}
                            >
                            <p>{book.title}</p>

                            </a>
                })}
                </div>

            )}
            

        </div>
    );
}
export default DropDown;