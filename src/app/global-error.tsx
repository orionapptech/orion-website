'use client';

import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
          <div className="mx-auto max-w-md px-4 text-center">
            <div className="mb-8">
              <h1 className="mb-4 text-6xl font-bold text-gray-900 dark:text-white">500</h1>
              <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Something went wrong!
              </h2>
              <p className="mb-8 text-gray-600 dark:text-gray-400">
                We apologize for the inconvenience. An unexpected error has occurred.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button
                onClick={() => reset()}
                className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/80"
              >
                Try Again
              </button>
              <Link
                href="/"
                className="rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
