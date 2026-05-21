export type SkillSlug = string;

export function getSkillInstallCommand(slug: SkillSlug) {
  return `npx skills add github:figueroaignacio/ui-skills/${slug}`;
}

export function getSkillSourceUrl(slug: SkillSlug) {
  return `https://github.com/figueroaignacio/ui-skills/blob/main/${slug}/SKILL.md`;
}
