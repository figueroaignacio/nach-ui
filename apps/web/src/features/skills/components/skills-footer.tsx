import { useTranslations } from 'next-intl';

export function SkillsFooter() {
  const t = useTranslations('components.skillsList');

  return (
    <p className="text-muted-foreground mt-10 font-mono text-sm">
      {t('syncedFrom')}{' '}
      <a
        href="https://github.com/figueroaignacio/ui-skills"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-foreground underline underline-offset-2 transition-colors"
      >
        github.com/figueroaignacio/ui-skills
      </a>
    </p>
  );
}
