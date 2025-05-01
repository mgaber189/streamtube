"use client"
import Link from "next/link";

function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-white px-6">
      <h2 className="text-3xl font-bold mb-4 text-red-500">There was an issue fetching the movie data. Please try again later.</h2>
      <Link
        href="/"
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md text-sm font-semibold transition-colors">
        Return Home
      </Link>
    </div>
  );
}

export default Error;
