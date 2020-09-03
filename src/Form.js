import React from "react";

const Form = ({
  title,
  setTitle,
  author,
  setAuthor,
  isbn,
  setIsbn,
  handleSubmit,
  currBook,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="">Author</label>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <label htmlFor="">ISBN#</label>
      <input
        type="text"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
      />
      <button type="submit">{currBook !== null ? "Update" : "Add"}</button>
    </form>
  );
};

export default Form;
