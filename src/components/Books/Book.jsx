import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { author, bookName, category, image, rating, tags, bookId } = book;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 border border-gray-200 shadow-sm hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col h-full">
        <figure className="bg-gray-100 w-full mx-auto p-5 py-8 rounded-lg">
          <img
            className="rounded-lg h-44 object-cover"
            src={image}
            alt={bookName}
          />
        </figure>

        <div className="p-0 mt-5 flex flex-col flex-grow:1">
          <div className="flex flex-wrap items-center gap-3 my-4">
            {tags.map((tag, index) => (
              <p
                key={index}
                className="text-[#23BE0A] bg-green-50 px-4 font-medium py-1.5 rounded-full text-sm"
              >
                {tag}
              </p>
            ))}
          </div>

          <div className="flex-grow:1">
            <h1 className="text-2xl truncate" title={bookName}>
              {bookName}
            </h1>
            <p className="text-lg text-gray-600 py-1">By: {author}</p>
          </div>

          <div className="border border-dashed mt-3 border-gray-200"></div>
          <div className="flex justify-between items-center mt-4 font-medium text-gray-600">
            <p className="text-lg text-green-600">{category}</p>
            <p className="inline-flex text-lg items-center gap-2">
              {rating} <Star size={20} color="#ffdf0f" />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
