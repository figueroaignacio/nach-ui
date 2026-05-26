import { Link } from '@/i18n/navigation';
import { Button } from '@repo/ui/components/button';
import { Container } from '@repo/ui/layout/container';
import { Separator } from '@repo/ui/src/components/separator';
import { useTranslations } from 'next-intl';
import { Logo } from './logo';

export function LandingLogoCta() {
  const t = useTranslations('components');

  const actions = [
    { href: '/docs', children: t('landingLogoCta.primaryAction'), variant: 'default' as const },
    {
      href: '/docs/components',
      children: t('landingLogoCta.secondaryAction'),
      variant: 'ghost' as const,
    },
  ];

  return (
    <section className="bg-background/60 relative w-full">
      <Container size="lg">
        <div className="relative flex min-h-lvh flex-col items-center justify-center gap-8 py-24 text-center sm:py-32">
          <Separator label={t('landingLogoCta.version')} className="w-full" />
          <Logo size="md" />
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed sm:text-base">
            {t('landingLogoCta.line1')}
            <br />
            {t('landingLogoCta.line2')}
          </p>
          <div className="flex items-center gap-3">
            {actions.map((action, index) => (
              <Button key={index} size="sm" variant={action.variant} asChild>
                <Link href={action.href}>{action.children}</Link>
              </Button>
            ))}
          </div>
          <Separator label={t('landingLogoCta.license')} />
        </div>
      </Container>
    </section>
  );
}
