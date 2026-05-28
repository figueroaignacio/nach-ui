import { Typography } from '@repo/ui/components/typography';
// Types
import type { Metadata } from 'next';
import type { Locale } from '@/i18n/routing';

// Hooks
import { getTranslations, setRequestLocale } from 'next-intl/server';

// Components
import { AllPosts } from '@/features/blog/components/all-posts';
import { buildAlternates, getAbsoluteUrl } from '@/lib/domains';
import { Container } from '@repo/ui/layout/container';
import { Stack } from '@repo/ui/layout/stack';

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'sections.blog' });
  const canonicalUrl = getAbsoluteUrl(locale, '/blog');

  return {
    title: 'Blog',
    description: t('subtitle'),
    openGraph: {
      title: 'Blog | NachUI',
      description: t('subtitle'),
      type: 'website',
      locale,
      url: canonicalUrl,
      siteName: 'NachUI',
      images: [
        {
          url: getAbsoluteUrl(locale, '/images/og/og-home.png'),
          width: 1200,
          height: 630,
          alt: 'Blog | NachUI',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Blog | NachUI',
      description: t('subtitle'),
      images: [getAbsoluteUrl(locale, '/images/og/og-home.png')],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: buildAlternates('/blog'),
    },
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'sections.blog' });

  return (
    <Container as="section" className="space-y-12 py-12">
      <Stack gap="1">
        <Typography variant="h1" className="text-2xl font-bold">
          Blog
        </Typography>
        <Typography variant="h2" className="text-muted-foreground text-lg">
          {t('subtitle')}
        </Typography>
      </Stack>
      <AllPosts />
    </Container>
  );
}
