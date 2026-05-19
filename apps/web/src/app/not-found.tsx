import { Typography } from '@repo/ui/components/typography';
import Link from 'next/link';
import { Flex } from '@repo/ui/layout/flex';

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <Flex direction="column" align="center" justify="center" className="min-h-screen">
          <Typography variant="h1" className="text-4xl font-bold">
            404
          </Typography>
          <Typography variant="p" className="text-muted-foreground mt-2">
            Page not found
          </Typography>
          <Link href="/" className="bg-primary text-primary-foreground mt-4 rounded-lg px-4 py-2">
            Go home
          </Link>
        </Flex>
      </body>
    </html>
  );
}
