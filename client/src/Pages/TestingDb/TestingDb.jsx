import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TestingDb.css";

export default function TestingDb() {
  const [nameMovie, setNameMovie] = useState("");
  const [reviewMovie, setReviewMovie] = useState("");
  const [movieReviewList, setMovieReviewList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/api/get").then((response) => {
      setMovieReviewList(response.data);
    });
  }, []);

  const handleSubmit = (evt) => {
    axios
      .post("http://localhost:3001/api/insert", {
        movieName: nameMovie,
        movieReview: reviewMovie,
      })
      .then(() => {
        alert("success insert");
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="TestingDb">
      <form onSubmit={handleSubmit} className="test-form">
        <label htmlFor="nameMovie">Name Movie</label>
        <input
          type="text"
          id="nameMovie"
          name="nameMovie"
          onChange={(e) => setNameMovie(e.target.value)}
          value={nameMovie}
        />
        <label htmlFor="reviewMovie">Review Movie</label>
        <input
          type="text"
          id="reviewMovie"
          name="reviewMoview"
          onChange={(e) => setReviewMovie(e.target.value)}
          value={reviewMovie}
        />
        <button>Submit</button>
      </form>
      <ul>
        {movieReviewList.map((movie) => (
          <li>
            {movie.movieName} {movie.movieReview}
          </li>
        ))}
      </ul>
    </div>
  );
}
