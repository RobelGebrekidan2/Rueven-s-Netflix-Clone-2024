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
      <Row title="WesternMovies" fetchUrl={requests.fetchWesternMovies} />
      {/* <Row title="AnimationMovies" fetchUrl={requests.AnimationMovies} /> */}
      <Row title="AdventureMovies" fetchUrl={requests.fetchAdventureMovies} />
      <Row title="CrimeMovies" fetchUrl={requests.fetchCrimeMovies} />
      <Row title="DramaMovies" fetchUrl={requests.fetchDramaMovies} />
      <Row title="FamilyMovies" fetchUrl={requests.fetchFamilyMovies} />
      <Row title="FantasyMovies" fetchUrl={requests.fetchFantasyMovies} />
      <Row title="HistoryMovies" fetchUrl={requests.fetchHistoryMovies} />
      <Row title="MusicMovies" fetchUrl={requests.fetchMusicMovies} />
      <Row title="MysteryMovies" fetchUrl={requests.fetchMysteryMovies} />
      <Row
        title="ScienceFictionMovies"
        fetchUrl={requests.fetchScienceFictionMovies}
      />
      <Row title="TvMovieMovies" fetchUrl={requests.fetchTvMovieMovies} />
      <Row title="ThrillerMovies" fetchUrl={requests.fetchThrillerMovies} />
      <Row title="WarMovies" fetchUrl={requests.fetchWarMovies} />
      <Row title="WesternMovies" fetchUrl={requests.fetchWesternMovies} />
      <Row title="AnimationMovies" fetchUrl={requests.fetchAnimationMovies} />
    </>
  );
};

export default RowList;
