import React from "react";

const Table = ({ books, handleRemove, handleEdit }) => {
  return (
    <div className="table">
      <div>
        <h3>Title</h3>
        <h3>Author</h3>
        <h3>ISBN#</h3>
        <h3>Settings</h3>
      </div>
      {books.map((book) => (
        <div key={book.bookId}>
          <p>{book.bookTitle}</p>
          <p>{book.bookAuthor}</p>
          <p>{book.bookIsbn}</p>
          <p onClick={() => handleRemove(book.bookId)}>Remove</p>
          <p onClick={() => handleEdit(book)}>Edit</p>
        </div>
      ))}
    </div>
  );
};

export default Table;
