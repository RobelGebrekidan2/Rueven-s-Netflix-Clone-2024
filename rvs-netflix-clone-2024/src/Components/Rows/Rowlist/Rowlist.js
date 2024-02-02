// import React from "react";
// import { Row } from "../Row/Row";
// import requests from "../../../utils/requests";

// export const Rowlist = () => {
//   return (
//     <>
//       <Row
//         title="NETFLIX ORIGINALS"
//         fetchurl={requests.fetchnetflixoriginals}
//         isLargeRow={true}
//       />
//       <Row title="Trending Now" fetchurl={requests.fetchtrending} />
//       <Row title="actionmovies" fetchurl={requests.fetchactionmovies} />
//       <Row title="comedymovies" fetchurl={requests.fetchcomedymovies} />
//       <Row title="horrormovies" fetchurl={requests.fetchhorrormovies} />
//       <Row title="romancemovies" fetchurl={requests.fetchromancemovies} />
//       <Row title="tvshows" fetchurl={requests.fetchtvshows} />
//       <Row title="documentaries" fetchurl={requests.fetchdocumentaries} />
//     </>
//   );
// };

// export default Rowlist;
import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/requests";

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />

      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="TV Shows" fetchUrl={requests.fetchTvShow} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
};

export default RowList;
