import React from "react";
import { Card, CardBody, CardFooter, Button } from "reactstrap";
import { Star, Heart, ChevronRight } from "react-feather";

function getYear(date) {
  return date?.split("-")[0] || "";
}

function MovieCard(props) {
  const movie = props.data;

  return (
    <Card color="dark" className="h-100">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.original_title}
      />
      <CardBody>
        <h6 className="text-ellipsis">{movie.original_title}</h6>
        <div className="d-flex justify-content-between">
          <small className="text-muted text-small">
            {getYear(movie.release_date)}
          </small>
          <small className="text-warning">
            <Star size={12} alignmentBaseline="inherit" />
            {movie.vote_average}
          </small>
        </div>
      </CardBody>
      <CardFooter className="border-0 d-flex justify-content-between">
        <Button outline color="info">
          <div className="d-flex justify-content-between align-items-center gap-2">
            <Heart size={16} />
            <small>Add to Watch List</small>
          </div>
        </Button>
        <Button outline color="secondary">
          <div className="d-flex justify-content-between align-items-center gap-1">
            <ChevronRight size={16} />
          </div>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default MovieCard;
