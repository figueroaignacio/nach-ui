'use client';

import { Typography } from '../../components/typography';

export function CustomTag() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div>
        <Typography
          variant="small"
          className="text-primary mb-1 block font-bold tracking-wider uppercase"
        >
          Paragraph rendered as Span
        </Typography>
        <Typography as="span" variant="p" className="bg-secondary/20 rounded p-2">
          This uses paragraph styling but is rendered as a inline `span` tag in the DOM.
        </Typography>
      </div>

      <div>
        <Typography
          variant="small"
          className="text-primary mb-1 block font-bold tracking-wider uppercase"
        >
          Heading rendered as Div
        </Typography>
        <Typography as="div" variant="h3">
          This looks like an H3, but it's actually a `div` element.
        </Typography>
      </div>

      <div>
        <Typography
          variant="small"
          className="text-primary mb-1 block font-bold tracking-wider uppercase"
        >
          Code block rendering
        </Typography>
        <Typography variant="code">
          console.log("This automatically renders as a code tag by variant inference");
        </Typography>
      </div>
    </div>
  );
}
