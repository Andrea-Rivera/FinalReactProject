import React from "react";

import Book from "../book";
import styles from "./BooksList.module.css";

const BooksList = (props) => {
  if (props.books.length === 0) {
    return null;
  }

  return (
    <ul className={styles["books-list"]}>
      {props.books.map((book) => (
        <Book key={book.key} name={book.name} />
      ))}
    </ul>
  );
};

export default BooksList;
