import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      
      <h1 className="text-7xl font-bold text-red-500">404</h1>
      
      <h2 className="text-2xl font-semibold mt-4">
        Oops! Page not found 
      </h2>

      <p className="text-gray-600 mt-2 max-w-md">
        The page you are looking for might have been removed, 
        had its name changed, or is temporarily unavailable.
      </p>

      <Link to="/">
        <button className="mt-6 px-6 py-2 bg-[#103c2d] text-white rounded-lg hover:bg-[#103c2d] transition">
           Back to Home
        </button>
      </Link>
      
    </div>
        </div>
    );
};

export default ErrorPage;