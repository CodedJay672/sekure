"use client";

import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <div className="w-1/2 h-1/2 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold">404</h1>
        <h2 className="text-3xl font-semibold">Page Not Found</h2>
      </div>

      <Link
        href="/"
        className="text-pretty bg-primary-fade text-primary px-6 py-6 rounded-full"
      >
        Return to Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
