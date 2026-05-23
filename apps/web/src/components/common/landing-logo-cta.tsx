import { Link } from '@/i18n/navigation';
import { Button } from '@repo/ui/components/button';
import { Container } from '@repo/ui/layout/container';
import { useTranslations } from 'next-intl';
import { Logo } from './logo';

export function LandingLogoCta() {
  const t = useTranslations('components');

  return (
    <section className="bg-background/60 relative w-full overflow-hidden">
      <div className="bg-foreground/3 pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
      <Container size="lg">
        <div className="relative flex min-h-lvh flex-col items-center justify-center gap-8 py-24 text-center sm:py-32">
          <div className="flex w-full max-w-xs items-center gap-4">
            <div className="bg-border/60 h-px flex-1" />
            <span className="text-muted-foreground/50 font-mono text-[10px] tracking-widest uppercase">
              {t('landingLogoCta.version')}
            </span>
            <div className="bg-border/60 h-px flex-1" />
          </div>

          <Logo size="xl" />
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed sm:text-base">
            {t('landingLogoCta.line1')}
            <br />
            {t('landingLogoCta.line2')}
          </p>
          <div className="flex items-center gap-3">
            <Button size="lg" asChild>
              <Link href="/docs">{t('landingLogoCta.primaryAction')}</Link>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <Link href="/docs/components" className="text-muted-foreground font-mono text-sm">
                {t('landingLogoCta.secondaryAction')}
              </Link>
            </Button>
          </div>
          <div className="flex w-full max-w-xs items-center gap-4">
            <div className="bg-border/60 h-px flex-1" />
            <span className="text-muted-foreground/50 font-mono text-[10px] tracking-widest">
              {t('landingLogoCta.license')}
            </span>
            <div className="bg-border/60 h-px flex-1" />
          </div>
        </div>
      </Container>
    </section>
  );
}
