import React, { Component } from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        // value={value}
        // onChange={onChange}
        name={name}
        id={name}
        // type={type}
        className="form-control"
        autoFocus
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
