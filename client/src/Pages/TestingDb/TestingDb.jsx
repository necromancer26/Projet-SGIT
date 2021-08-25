import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TestingDb.css";

export default function TestingDb(props) {
  const [nameMovie, setNameMovie] = useState("");
  const [reviewMovie, setReviewMovie] = useState("");
  const [movieReviewList, setMovieReviewList] = useState([]);
  const [review, setReview] = useState("");

  useEffect(() => {
    console.log("loop");
    axios.get("http://localhost:3001/api/get").then((response) => {
      setMovieReviewList(response.data);
    });
  }, []);
  const deleteReview = (movieName) => {
    axios
      .delete(`http://localhost:3001/api/delete/${movieName}`)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const deleteAll = () => {
    axios
      .delete(`http://localhost:3001/api/delete`)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const updateReview = (name) => {
    console.log(review);
    axios
      .put("http://localhost:3001/api/update", {
        movieName: name,
        movieReview: review,
      })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(props);
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
        <button onClick={deleteAll}>DELETE ALL</button>
      </form>
      <ul className="movie-container">
        {movieReviewList.map((movie) => (
          <li className="movie-card">
            {movie.movieName} {movie.movieReview}
            <input
              type="text"
              // value={updatedReview}
              onChange={(evt) => {
                setReview(evt.target.value);
              }}
            />
            <button
              onClick={() => {
                updateReview(movie.movieName);
              }}
            >
              Update
            </button>
            <button
              onClick={() => {
                deleteReview(movie.movieName);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
