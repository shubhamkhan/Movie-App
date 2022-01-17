import React,{useState,useEffect} from 'react';
import axios from '../../../service/axios';
import api from '../../../service/api';
import "./Banner.css";

const Banner= ()=> {
    const [movie,setMovie] = useState([]);

    const truncate = (str, n)=> {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(api.originals)
            //Give to our movie hook one of all the movies randomly
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
            ]);
            return request;
        }
        fetchData();
        
    },[]);
    
    return (
        <header className="banner"
            style={{
                backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition : "top center",
                backgroundSize: "cover",
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button play">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                        </svg>
                        Play</button>
                    <button className="banner__button info">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                        </svg>
                        <div className="space"></div> More Information</button>
                    
                </div>
                <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
            </div>   
            <div className="banner__fadeBottom"/>
        </header>
    )
}

export default Banner