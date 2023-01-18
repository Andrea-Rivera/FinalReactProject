import React, { useCallback, useState } from "react";
import Button from "../button";
import BooksList from "../booksList";
import LoadingSpinner from "../loadingSpinner";

const Book = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBooksHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://openlibrary.org/authors/OL10664920A/works.json?limit=10"
      );
      if (response.status === 404) {
        setError(true);
        console.log(response);
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      console.log({ data });
      const transformedBooks = data.entries.map((bookData, index) => {
        return {
          key: bookData.key,
          name: bookData.title,
        };
      });
      setBooks(transformedBooks);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  let content = <p>No books found</p>;

  if (error) {
    content = <p>{error}</p>;
  }

  if (books.length > 0) {
    content = <BooksList books={books} />;
  }

  if (isLoading) {
    content = <LoadingSpinner />;
  }

  return (
    <section style={{ height: "100vh" }}>
      <h1>Books</h1>
      <Button onClick={fetchBooksHandler}>Search for Roald Dahl books</Button>
      {content}
    </section>
  );
};

export default Book;
