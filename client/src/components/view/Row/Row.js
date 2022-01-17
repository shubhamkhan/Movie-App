import React, {useState,useEffect} from 'react'
import axios from '../../../service/axios';
import "./Row.css";
import Modal from '../Modal/Modal';

const Row = ({title, fetchUrl, isLargeRow, id}) => {

    const base_url = "https://image.tmdb.org/t/p/original/";
    const [movies, setMovies] = useState([]);
    const [modalVisibility, setModalVisibility] = useState(false);
    const [movieSelected, setMovieSelection] = useState({});

    // A snippet of code which runs based on a specific condition/variable
    useEffect(()=>{

        // if [], run once when the row loads, and dont run again 

        async function fetchData(){
            const request = await axios.get(fetchUrl);
            // GET REQUEST  = "https://api.themoviedb.org/3/fetchUrl"
            setMovies(request.data.results)
            return request;
        }

        fetchData();

    }, [fetchUrl]);

    const handleClick = (movie) =>{
        setModalVisibility(true);
        setMovieSelection(movie);
        console.log(movie);
    }

    return (
        <div>
            <section className="row">
                <h2 className='text-start'>{title}</h2>
                <div className="slider">
        
                    <div className="slider__arrow-left" >
                        <span className="arrow" onClick={()=>{document.getElementById(id).scrollLeft-=(window.innerWidth-80)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                            </svg>
                        </span>
                    </div>
                    <div id={id} className="row__posters">
                        {movies.map(movie=>(
                            <img
                                key={movie.id}
                                onClick={() => handleClick(movie)}
                                className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                                loading="lazy"
                                alt={movie.name}/>
                        ))}
                        
                    </div>
                    <div className="slider__arrow-right" >
                        <span className="arrow" onClick={()=>{document.getElementById(id).scrollLeft+=(window.innerWidth-80)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                            </svg>
                        </span>
                    </div>
                </div>
                {modalVisibility && <Modal {...movieSelected} setModalVisibility={setModalVisibility}/>}
            </section>
        </div>
    )
}

export default Row