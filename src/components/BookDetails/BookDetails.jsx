import { ArrowLeft } from "lucide-react";
import {
  ScrollRestoration,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookIdP = Number(id);
  const data = useLoaderData();
  const singleData = data.find((book) => book.bookId === bookIdP);
  const {
    author,
    bookName,
    category,
    image,
    rating,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = singleData;
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="btn px-8 mb-3 md:mb-0 mt-8 btn-success text-white"
      >
        <ArrowLeft /> Go back
      </button>
      <ScrollRestoration />
      <div className="container mx-auto h-full md:h-177.75 flex flex-col md:flex-row items-center gap-8">
        <div className="bg-gray-100 flex-1 py-16 rounded-xl">
          <img
            className="md:h-141 md:w-100 mx-auto rounded-lg"
            src={image}
            alt={bookName}
          />
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <h1 className="text-2xl md:text-5xl font-semibold">{bookName}</h1>
          <p className="text-xl text-gray-600 py-2">By: {author}</p>
          <div className="border border-gray-100"></div>
          <p className="text-lg font-semibold">{category}</p>
          <div className="border border-gray-100"></div>
          <p>
            <span className="font-bold text-xl mr-2">Review:</span> {review}
          </p>
          <div className="flex flex-wrap items-center gap-3 my-4">
            <span className="font-bold text-gray-800 mr-2">Tag: </span>
            {tags.map((tag, index) => (
              <p
                key={index}
                className="text-[#23BE0A] bg-green-50 px-4 font-medium py-1.5 rounded-full text-sm"
              >
                #{tag}
              </p>
            ))}
          </div>
          <div className="border border-gray-100"></div>
          <div className="flex items-center gap-3 md:text-lg">
            <h3 className="text-gray-400 w-40 md:w-56">Number of Pages:</h3>
            <p className="font-semibold">{totalPages}</p>
          </div>
          <div className="flex items-center gap-10 md:text-lg">
            <h3 className="text-gray-400 w-30 md:w-48">Publisher:</h3>
            <p className="font-semibold">{publisher}</p>
          </div>
          <div className="flex items-center gap-10 md:text-lg">
            <h3 className="text-gray-400 w-30 md:w-48">Year of Publishing:</h3>
            <p className="font-semibold">{yearOfPublishing}</p>
          </div>
          <div className="flex items-center gap-10 md:text-lg">
            <h3 className="text-gray-400 w-30 md:w-48">Rating:</h3>
            <p className="font-semibold">{rating}</p>
          </div>
          <div className="flex items-center gap-5 ">
            <button className="btn px-8 ">Mark To Read</button>
            <button className="btn btn-accent px-8 text-white">Add To Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
