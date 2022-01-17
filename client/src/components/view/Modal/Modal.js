import React,{useEffect, useState} from 'react';
import './Modal.css';
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const Modal = ({backdrop_path, title, overview, name, release_date, first_air_date, vote_average, setModalVisibility}) => {
    const base_url = "https://image.tmdb.org/t/p/original/";
    const [trailerUrl, setTrailerUrl] = useState("") 
    const opts = {
        height : "390",
        width : "100%",
        playerVars : {
            autoplay : 1,
        },
    }
    const randomPorcentaje = ()=>{
        return Math.floor(Math.random() * 100);
    }
    useEffect(() => {
        if(trailerUrl){
            setTrailerUrl('')
        }else{
            movieTrailer(title || name || "")
            .then(url =>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch(error => console.log(error))
        }
    }, [])

    var modalStyle = {
        padding: "20px",
        margin: "20px",
        display: "block",
        left: "auto",
        height: "100%"
      };
    
    return (
        <div className="presentation" role="presentation">
            <div className="wrapper-modal">
                <div className="modal" style={modalStyle}>
                    <span onClick={()=>setModalVisibility(false)}className="modal-close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                        </svg>
                    </span>
                    {trailerUrl ? <Youtube videoId={trailerUrl} opts={opts}/> :                     
                        (<img
                        className="modal__poster-img"
                        src={`${base_url}${backdrop_path}`}
                        alt="movie name"
                    />)}

                    <div className="modal__content">
                        <p className="modal__details"><span className="modal__user-perc">{randomPorcentaje()}% for you</span> {release_date ? release_date : first_air_date}</p>
                        <h2 className="modal__title">{title ? title : name}</h2>
                        <p className="modal__overview">{overview}</p>
                        <p className="modal__overview">Vote Average: {vote_average}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
