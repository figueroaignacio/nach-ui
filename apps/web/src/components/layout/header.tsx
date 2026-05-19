import { Stack } from '@repo/ui/layout/stack';
import { MobileMenu } from './mobile-menu';
import { Navbar } from './navbar';

export function Header() {
  return (
    <Stack as="header" className="bg-background sticky top-0 z-100">
      <Navbar />
      <MobileMenu />
    </Stack>
  );
}
