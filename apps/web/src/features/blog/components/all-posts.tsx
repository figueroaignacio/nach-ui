import { getLocale } from 'next-intl/server';
import { ContentRepository } from '@/lib/content-repository';
import { Grid } from '@repo/ui/layout/grid';
import { PostCard } from './post-card';

export async function AllPosts() {
  const locale = await getLocale();
  const posts = ContentRepository.getPosts(locale);

  return (
    <Grid as="ul" columns="1" gap="5" className="sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <li key={post.title}>
          <PostCard
            title={post.title}
            description={post.description}
            slug={post.slug}
            date={post.date}
          />
        </li>
      ))}
    </Grid>
  );
}
