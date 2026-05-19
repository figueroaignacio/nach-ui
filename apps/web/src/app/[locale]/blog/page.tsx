import { Typography } from '@repo/ui/components/typography';
// Hooks
import { useTranslations } from 'next-intl';

// Components
import { AllPosts } from '@/features/blog/components/all-posts';
import { Container } from '@repo/ui/layout/container';
import { Stack } from '@repo/ui/layout/stack';

export default function BlogPage() {
  const t = useTranslations('sections.blog');

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
