'use client';
import { Typography } from '@repo/ui/components/typography';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
          <Typography variant="h2" className="mb-2 text-3xl font-bold">
            Critical Application Error
          </Typography>
          <Typography variant="p" className="mb-6 text-gray-600">
            A critical error occurred that could not be handled gracefully.
          </Typography>
          <button
            onClick={() => reset()}
            className="rounded bg-black px-6 py-2 font-medium text-white"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
