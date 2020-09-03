import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

import Form from "./Form";
import Container from "./Container";
import Table from "./Table";

const App = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [currBook, setCurrentBook] = useState(null);
  const [books, setBooks] = useState([
    {
      bookTitle: "React",
      bookAuthor: "Eric",
      bookIsbn: "42343424",
      bookId: uuidv4(),
    },
  ]);

  // Handle the form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentBook(null);
    // This only runs if the edit or add btn are clicked
    !currBook ? addBook() : handleUpdateBtn();
  };

  // Add a book
  const addBook = () => {
    setBooks([
      // Get the previous books
      ...books,
      {
        bookTitle: title,
        bookAuthor: author,
        bookIsbn: isbn,
        bookId: uuidv4(),
      },
    ]);
  };

  // Remove book
  const handleRemove = (id) => {
    // Remove the book that was clicked on. This returns all other books
    setBooks(books.filter((book) => book.bookId !== id));
  };

  // Edit a specific book
  const handleEdit = (book) => {
    // Update the input values
    setTitle(book.bookTitle);
    setAuthor(book.bookAuthor);
    setIsbn(book.bookIsbn);
    setCurrentBook(book.bookId);
  };

  // Update button
  const handleUpdateBtn = () => {
    setBooks(
      books.map((book) =>
        book.bookId === currBook
          ? {
              ...books,
              bookTitle: title,
              bookAuthor: author,
              bookIsbn: isbn,
            }
          : book
      )
    );
  };

  return (
    <div className="App">
      <Container>
        <Form
          title={title}
          setTitle={setTitle}
          author={author}
          setAuthor={setAuthor}
          isbn={isbn}
          setIsbn={setIsbn}
          handleSubmit={handleSubmit}
          handleUpdateBtn={handleUpdateBtn}
          currBook={currBook}
        />
        <Table
          books={books}
          handleRemove={handleRemove}
          handleEdit={handleEdit}
        />
      </Container>
    </div>
  );
};

export default App;
