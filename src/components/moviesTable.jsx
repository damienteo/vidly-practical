import React, { Component } from "react";
import Liked from "./common/like";

const MoviesTable = props => {
  const { movies, onDelete, onLike } = props;
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Genre</th>
          <th scope="col">Stock</th>
          <th scope="col">Rate</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {movies.map(movie => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Liked liked={movie.liked} onClick={() => onLike(movie)} />
            </td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(movie)}
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
