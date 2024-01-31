import React from 'react'
import { Row } from '../Row/Row';
import requests from "../../../utils/requests"

export const Rowlist = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchurl={requests.fetchnetflixoriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchurl={requests.fetchtrending} />
      <Row title="actionmovies" fetchurl={requests.fetchactionmovies} />
      <Row title="comedymovies" fetchurl={requests.fetchcomedymovies} />
      <Row title="horrormovies" fetchurl={requests.fetchhorrormovies} />
      <Row title="romancemovies" fetchurl={requests.fetchromancemovies} />
      <Row title="tvshows" fetchurl={requests.fetchtvshows} />
      <Row title="documentaries" fetchurl={requests.fetchdocumentaries} />
    </>
  );
}


export default Rowlist;

