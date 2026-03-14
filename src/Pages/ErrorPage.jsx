import React from "react";
import { useRouteError, Link } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 px-4 text-center">
      <h1 className="text-4xl md:text-9xl font-extrabold text-green-600 mb-4 drop-shadow-md">
        {error.status || "Oops!"}
      </h1>

      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
        {error.status === 404 ? "Page Not Found!" : "Something went wrong!"}
      </h2>

      <p className="text-lg text-gray-500 mb-8 max-w-md">
        {error.status === 404
          ? "The page you are looking for doesn't exist or has been moved."
          : error.statusText || error.message}
      </p>

      <Link to="/">
        <button className="btn bg-green-600 hover:bg-green-700 text-white px-8 text-lg border-none shadow-lg">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
