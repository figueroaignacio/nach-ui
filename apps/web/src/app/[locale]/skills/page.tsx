import { SkillsList } from '@/features/skills/components/skills-list';
import { ContentRepository } from '@/lib/content-repository';
import { buildAlternates, getAbsoluteUrl } from '@/lib/domains';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<{ q?: string | string[] }>;
};

export default async function SkillsPage({ params, searchParams }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const qRaw = (await searchParams)?.q;
  const initialQuery = Array.isArray(qRaw) ? (qRaw[0] ?? '') : (qRaw ?? '');

  const serializedSkills = ContentRepository.getSkills().map((skill) => ({
    slug: skill.slug,
    name: skill.name,
    description: skill.description,
  }));

  return <SkillsList initialSkills={serializedSkills} initialQuery={initialQuery} />;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const canonicalUrl = getAbsoluteUrl(locale, '/skills');

  return {
    title: 'Agent Skills',
    description: 'Custom AI agent skills designed for the NachUI component library ecosystem.',
    openGraph: {
      title: 'Agent Skills - NachUI',
      description: 'Custom AI agent skills designed for the NachUI component library ecosystem.',
      type: 'website',
      locale,
      url: canonicalUrl,
      siteName: 'NachUI',
    },
    alternates: {
      canonical: canonicalUrl,
      languages: buildAlternates('/skills'),
    },
  };
}
