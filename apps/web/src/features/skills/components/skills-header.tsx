'use client';

import { useTranslations } from 'next-intl';

export type SkillsHeaderProps = {
  totalCount: number;
};

export function SkillsHeader({ totalCount }: SkillsHeaderProps) {
  const t = useTranslations('components.skillsList');

  return (
    <div className="mb-12">
      <h1 className="text-foreground mb-2 text-3xl font-semibold tracking-tight">{t('title')}</h1>
      <p className="text-muted-foreground font-mono text-base">
        {t('subtitle', { count: totalCount })}
      </p>
    </div>
  );
}
