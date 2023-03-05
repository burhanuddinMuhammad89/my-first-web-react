import { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { getGenres } from "./../helper/actions";

function GenreList(props) {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenres().then((response) => setGenres(response.genres));
  }, []);

  return (
    <div className="mb-4">
      {genres.map((genre) => (
        <Button
          key={genre.id}
          outline={true}
          size="sm"
          color="secondary"
          className="mx-1 mb-2"
        >
          {genre.name}
        </Button>
      ))}
    </div>
  );
}

export default GenreList;