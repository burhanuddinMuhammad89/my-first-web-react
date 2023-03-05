import React, { useEffect, useState } from "react";
import { Container, Input, Row } from "reactstrap";

import MovieCard from "./../components/MovieCard";
import GenreList from "./../components/GenreList";
import SectionTitle from "./../components/SectionTitle";
import { getMovies } from "./../helper/actions";

function MainPage(props) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovies().then((response) => setMovieList(response.results));
    console.log(getMovies().then((response) => console.log(response)))
  }, []);

  return (
    <Container className="py-3">
      {/* Search box */}
      <Input placeholder="Search..." size="sm" className="mb-4 search-box" />

      {/* List Of Genre */}
      <GenreList />

      <SectionTitle>Recommendation Movies</SectionTitle>

      {/* List Movie */}
      <Row>
        {movieList.map((movie) => (
          <div className="col-6 col-md-3 mb-3">
            <MovieCard data={movie} />
          </div>
        ))}
      </Row>
    </Container>
  );
}

export default MainPage;