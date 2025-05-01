import Link from 'next/link';
import React from 'react';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-white px-6">
      <h2 className="text-5xl font-bold mb-4 text-red-500">404 - Not Found</h2>
      <p className="text-lg mb-8 text-gray-300">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md text-sm font-semibold transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}

export default NotFound;
