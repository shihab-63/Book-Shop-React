import React from "react";
import Book from "./Book";

const Books = ({ data }) => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center">
        All <span className="text-green-600 my-8">Books</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 my-10">
        {data.map((book) => (
          <Book book={book} key={book.bookId} />
        ))}
      </div>
    </div>
  );
};

export default Books;
