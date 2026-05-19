'use client';

import { Typography } from '../../components/typography';

export function LeadMuted() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div>
        <Typography
          variant="small"
          className="text-primary mb-1 block font-bold tracking-wider uppercase"
        >
          Lead Text
        </Typography>
        <Typography variant="lead">
          A tall paragraph text style designed to introduce an article or section.
        </Typography>
      </div>

      <div>
        <Typography
          variant="small"
          className="text-primary mb-1 block font-bold tracking-wider uppercase"
        >
          Large Text
        </Typography>
        <Typography variant="large">
          Slightly larger copy designed for subheaders, callouts, or featured content.
        </Typography>
      </div>

      <div>
        <Typography
          variant="small"
          className="text-primary mb-1 block font-bold tracking-wider uppercase"
        >
          Small & Muted Text
        </Typography>
        <Typography variant="muted">
          De-emphasized descriptive text, perfect for captions or legal copy.
        </Typography>
      </div>
    </div>
  );
}
