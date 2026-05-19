'use client';

import { Typography } from '@repo/ui/components/typography';
import { useEffect } from 'react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center space-y-4">
      <Typography variant="h2" className="text-2xl font-bold tracking-tight">
        Something went wrong!
      </Typography>
      <Typography variant="p" className="text-muted-foreground max-w-md text-center">
        An unexpected error occurred. You can try recovering by clicking the button below.
      </Typography>
      <button
        onClick={() => reset()}
        className="bg-foreground text-background hover:bg-foreground/90 rounded-md px-4 py-2 font-medium transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
