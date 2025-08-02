// app/not-found.js (for Next.js 13+ App Router)

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-primary bg-quarterary dark:text-white text-primary">
      <div className="text-center">
        <h1 className="text-6xl font-bold  mb-4">404</h1>
        <h2 className="text-2xl  mb-6">Page Not Found</h2>
        <p className="text-red-400 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="px-6 py-3 dark:bg-white bg-primary dark:text-blue-900 text-white font-semibold rounded-full hover:bg-blue-300 transition duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
