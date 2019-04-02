import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class MovieForm extends Form {
  state = {
    data: { title: "", genre: "", numberInStock: "", Rate: "" },
    errors: {}
  };

  schema = {
    title: Joi.string()
      .required()
      .label("Title"),
    genre: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label("Number in Stock"),
    rate: Joi.number()
      .min(0)
      .max(10)
      .required()
      .label("Rate")
  };

  doSubmit = () => {
    //call server

    console.log(this.state.data);
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("genre", "Genre")}
          {this.renderInput("numberInStock", "Number in Stock", "number")}
          {this.renderInput("rate", "Rate", "number")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
