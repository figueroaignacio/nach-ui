import { Typography } from '@repo/ui/components/typography';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('sections.about');

  const actions = [
    {
      label: 'ignaciofigueroa.dev',
      href: 'https://ignaciofigueroa.dev',
    },
    {
      label: 'github.com/figueroaignacio',
      href: 'https://github.com/figueroaignacio',
    },
    {
      label: 'in/figueroa-ignacio',
      href: 'https://www.linkedin.com/in/figueroa-ignacio/',
    },
  ];

  return (
    <div className="bg-background relative flex min-h-svh flex-col items-center justify-center overflow-hidden py-24">
      <section className="z-10 mx-auto flex w-full max-w-3xl flex-col px-6">
        <div className="relative mb-8">
          <Image
            src="https://github.com/figueroaignacio.png"
            alt="Ignacio Figueroa"
            width={120}
            height={120}
            className="border-border relative z-10 rounded-full border shadow-md"
          />
        </div>
        <Typography variant="h1" className="text-foreground mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
          {t('title')}
        </Typography>
        <Typography variant="h2" className="text-muted-foreground mb-12 text-xl font-medium md:text-2xl">
          {t('subtitle')}
        </Typography>
        <div className="text-foreground/80 max-w-2xl space-y-6 text-left text-lg leading-relaxed">
          <Typography variant="p">{t('content1')}</Typography>
          <Typography variant="p">{t('content2')}</Typography>
          <Typography variant="p">{t('content3')}</Typography>
          <Typography variant="p">{t('content4')}</Typography>
        </div>
        <div className="border-border mt-16 flex w-full flex-wrap space-x-3 border-t pt-8">
          {actions.map((action) => (
            <a
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground underline transition-colors"
            >
              {action.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'sections.about' });

  return {
    title: `${t('title')} | NachUI`,
    description: t('subtitle'),
  };
}
