import React, { useEffect, useState } from 'react'
import "./Row.css";
import axios from "../../../utils/axios"
// import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube';

export const Row = ({title,fetchurl,isLargeRow}) => {
  const[movies, setMovie] = usestate([]);
//   const [trailerurl, setTrailerurl] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";

useEffect(()=>{
    (async()=>{
        try{
            console.log(fetchurl)
            const request = await axios.get(fetchurl)
            console.log(request)
            setMovie(request.data.results);
        } catch (error){
            console.log("error",error);
        }
    })()
}, [fetchurl]);

const handleClick = (movie) =>

  if (trailerurl) {
    setTrailerurl('')
  } else {
    movieTrailer(movie?.title||movie?.name||movie?.original_name)
    .then((url)
    const urlparams = new URLSearchParams(new URL(url).search)
    console.log(urlparams)
    console.log(urlparams.get('v'))
    setTrailerurl(urlparams.get('v'));
    
  })
}
}
const opts = {
    height: '390' ,
    width: "100%",
    playerVars: {
        autoplay: 1,
    },
}
    return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='row__posters'>
            {movies?.map((movie, index)=>(
                <img
                onClick={()=> handleclick(movie)}
                key = {index} src={ ${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}} alt = {movie.name} className= { row__poster $ {isLargeRow && "row__posterLarge"}}
                {isLargeRow && "row__posterLarge"}}
                />
            ))}
        </div>
    <div style={{padding: '40px'}}>
        {trailerurl && <youTube videoId = {trailerurl} opts={opts} />}
    </div/> */}
    </div>
  )
}
