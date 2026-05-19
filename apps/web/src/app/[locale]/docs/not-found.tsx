'use client';

import { Link } from '@/i18n/navigation';
import { Home01Icon, Search02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Button } from '@repo/ui/components/button';
import { Typography } from '@repo/ui/components/typography';
import { Container } from '@repo/ui/layout/container';
import { Flex } from '@repo/ui/layout/flex';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('docs.notFound');

  return (
    <Flex align="center" justify="center" className="relative min-h-[85svh] overflow-hidden px-4">
      <Container size="md" className="relative z-10 text-center">
        <div className="relative mb-8">
          <Typography variant="h1" className="text-5xl leading-none font-black tracking-tighter">
            Error 404
          </Typography>
        </div>
        <Typography
          variant="p"
          className="text-muted-foreground mx-auto mb-12 max-w-md text-balance"
        >
          {t('description')}
        </Typography>
        <Flex direction="column" align="center" justify="center" gap="4" className="sm:flex-row">
          <Button.Group>
            <Link href="/">
              <Button
                size="sm"
                variant="secondary"
                leftIcon={
                  <HugeiconsIcon
                    icon={Home01Icon}
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5"
                  />
                }
              >
                {t('goHome')}
              </Button>
            </Link>
            <Link href="/docs">
              <Button
                size="sm"
                variant="ghost"
                leftIcon={
                  <HugeiconsIcon
                    icon={Search02Icon}
                    className="h-4 w-4 transition-transform group-hover:scale-110"
                  />
                }
              >
                {t('goDocs')}
              </Button>
            </Link>
          </Button.Group>
        </Flex>
      </Container>
    </Flex>
  );
}
