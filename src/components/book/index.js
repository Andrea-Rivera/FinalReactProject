import React from "react";

import classes from "./Book.module.css";

const Book = (props) => {
  return (
    <li className={classes.Book}>
      <h2>{props.name}</h2>
    </li>
  );
};

export default Book;
