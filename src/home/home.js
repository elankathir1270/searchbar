import {React, useState} from "react";
import Searchbar from "../searchbar/searchbar";
import { PhotoApi } from "../Service/photoApi";
import "./home.css";
import DropDown from "../searchbar/sbwithDropDown";
import BookData from "../Service/Data.json"
import { ExitIcon } from "../component/exit-icon";


const Home = () => {

    const [photoDetails, setPhotoDetails] = useState([]);

    const Apicall = (photoName) => {
        PhotoApi.get("/search/photos", {
            params: {
                query: photoName,
                per_page: 4

            }
        }).then((res) => {
            const d = res.data

            const ImageURLs = d?.results?.map((item) => {
                return item?.urls?.small;

            });
            setPhotoDetails(ImageURLs);
        })
    } 


    return(

        <div className="home-cont">
            <div>
            <Searchbar 
            placeHolder = "search photos"
            handleInput = {Apicall}
            />
            </div>

            <div className="img-cont">

                {photoDetails.length !==0 ? photoDetails.map((url) => {
                    return (

                        <div>
                        <img className="img-style" src= {url} />
                        </div>
                       
                       
                    )
                }):(<></>)
                }

                {photoDetails.length !==0 &&
                 <button className="exitbtn"
                 onClick={() => setPhotoDetails([]) }
                 ><ExitIcon /></button>}

            </div>
            <div>
                <DropDown 
                placeHolder = "search books"
                data = {BookData}
                />
            </div>
        </div>

      
    )
}
export default Home;