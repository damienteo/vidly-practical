import React from "react";

const Like = props => {
  let classes = "fas fa-heart";
  if (!props.liked) classes = "far fa-heart";
  return (
    <i
      className={classes}
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Like;
