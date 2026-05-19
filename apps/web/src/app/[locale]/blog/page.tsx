import { Typography } from '@repo/ui/components/typography';
// Hooks
import { useTranslations } from 'next-intl';

// Components
import { AllPosts } from '@/features/blog/components/all-posts';

export default function BlogPage() {
  const t = useTranslations('sections.blog');

  return (
    <section className="container mx-auto space-y-12 py-12">
      <div className="space-y-1">
        <Typography variant="h1" className="text-2xl font-bold">Blog</Typography>
        <Typography variant="h2" className="text-muted-foreground text-lg">{t('subtitle')}</Typography>
      </div>
      <AllPosts />
    </section>
  );
}
