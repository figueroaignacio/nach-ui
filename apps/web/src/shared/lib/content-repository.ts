import { allDocs, allPosts, allSkills, type Doc, type Post } from 'content-collections';

type Skill = (typeof allSkills)[number];

export const ContentRepository = {
  getDocs(locale?: string): Doc[] {
    const docs = Array.isArray(allDocs) ? allDocs : [];
    return locale ? docs.filter((doc) => doc.locale === locale) : docs;
  },

  getDocBySlug(slug: string, locale: string): Doc | undefined {
    return this.getDocs(locale).find((doc) => doc.slugAsParams === slug);
  },

  getPosts(locale?: string): Post[] {
    const posts = Array.isArray(allPosts) ? allPosts : [];
    return locale ? posts.filter((post) => post.locale === locale) : posts;
  },

  getPostBySlug(slug: string, locale: string): Post | undefined {
    return this.getPosts(locale).find((post) => post.slugAsParams === slug);
  },

  getSkills(): Skill[] {
    const skills = Array.isArray(allSkills) ? allSkills : [];
    return skills;
  },

  getSkillBySlug(slug: string): Skill | undefined {
    return this.getSkills().find((skill) => skill.slug === slug);
  },
};
