import React, { useEffect, useState } from 'react'
import requests from '../../utils/requests'
import axios from '../../utils/axios'
import "./banner.css"

const Banner = () => {

  const [movie, setMovie] = useState({})
  useEffect(() =>{
    (async()=> {
      try{
        const request = await axios.get(requests.fetchnetflixoriginals)
        setMovie(request.data.results[
          Math.floor(Math.random()* request.data.results.length)
        ]);
      } catch (error) {
        console.log("error", error);
      }
    })()
  },[]);  
  
  return (
 <h1>welcome</h1>
      )
}

export default Banner;









// export default function Banner() {
//   return (
//     <div className="banner"
//     style={{
//         backgroundSize: "cover ",
//         backgroundImage: 'url()',
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat"
//     }}
  
//   <div className="banner_contents">

  
//     <h1 className='banner_title'>

//     </h1>
//     <div className= "banner_buttons">
//       <button className='banner_button play'>play</button>
//       <button className='banner_button'>My list</button>
//     </div>
//     <h1 className= "banner_description"></h1>
//     </div>
//     <div className='banner_fadebottom'/>
//     </div>
    
//     )
// }
