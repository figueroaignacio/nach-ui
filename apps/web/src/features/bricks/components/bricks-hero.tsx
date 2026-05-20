import { GitHubStarHeroCta } from '@/components/common/github-star-cta';
import { Link } from '@/i18n/navigation';
import { ArrowRight02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Button } from '@repo/ui/components/button';
import { Typography } from '@repo/ui/components/typography';
import { Container } from '@repo/ui/layout/container';
import { Flex } from '@repo/ui/layout/flex';
import { Stack } from '@repo/ui/layout/stack';
import { useTranslations } from 'next-intl';
import { BRICK_CATEGORIES } from '../lib/bricks-registry';

interface BricksHeroProps {
  activeSlug?: string;
}

interface BricksHeroActions {
  label: string;
  href: string;
  variant: 'default' | 'secondary';
}

export function BricksHero({ activeSlug }: BricksHeroProps) {
  const t = useTranslations('sections.bricks');
  const actions: BricksHeroActions[] = t.raw('actions');

  return (
    <Stack align="center" className="bg-background relative overflow-hidden pt-24 pb-8">
      <Container as="section" size="fluid">
        <Stack align="center" justify="center" gap="3" className="relative z-10">
          <GitHubStarHeroCta />
          <Stack gap="2" className="text-center">
            <Typography
              variant="h1"
              className="text-foreground text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl"
            >
              {t('title')}
            </Typography>
            <Typography
              variant="p"
              className="text-muted-foreground text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl"
            >
              {t('subtitle')}
            </Typography>
          </Stack>
          <Typography
            variant="p"
            className="text-muted-foreground mx-auto max-w-2xl text-center text-lg"
          >
            {t('description')}
          </Typography>
          <Flex align="center" gap="4">
            {actions.map((action) => (
              <Button
                key={action.label}
                variant={action.variant}
                size="sm"
                rightIcon={<HugeiconsIcon icon={ArrowRight02Icon} size={14} />}
                asChild
              >
                <Link href={action.href}>{action.label}</Link>
              </Button>
            ))}
          </Flex>
        </Stack>
      </Container>
      <Flex
        as="nav"
        align="center"
        justify="between"
        className="mt-12 w-full max-w-7xl"
        aria-label="Brick categories"
      >
        <Flex align="center" gap="4">
          {BRICK_CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/bricks/${category.slug}`}
              className={
                activeSlug === category.slug
                  ? 'text-foreground border-foreground border-b-2 pb-1 text-sm font-semibold'
                  : 'text-muted-foreground hover:text-foreground pb-1 text-sm transition-colors'
              }
              aria-current={activeSlug === category.slug ? 'page' : undefined}
            >
              {category.name}
            </Link>
          ))}
        </Flex>
        <Link
          href="/bricks/login"
          className="text-muted-foreground hover:text-foreground hidden text-sm transition-colors sm:block"
        >
          Browse all bricks →
        </Link>
      </Flex>
    </Stack>
  );
}
