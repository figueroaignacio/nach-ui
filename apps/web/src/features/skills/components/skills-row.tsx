'use client';

import { Copy01Icon, Tick02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { useTranslations } from 'next-intl';

import { getSkillInstallCommand } from '@/features/skills/lib/skills';
import { Link } from '@/i18n/navigation';

import type { SerializedSkill } from './skills-list';

export type SkillsRowProps = {
  index: number;
  skill: SerializedSkill;
  copied: boolean;
  onCopy: (slug: string) => void;
};

export function SkillsRow({ index, skill, copied, onCopy }: SkillsRowProps) {
  const t = useTranslations('components.skillsList');

  return (
    <li className="border-border border-b last:border-0">
      <div className="group hover:bg-muted/20 grid grid-cols-[2rem_1fr_auto] items-center gap-4 px-0 py-4 transition-colors">
        <span className="text-muted-foreground font-mono text-base tabular-nums">{index}</span>

        <Link
          href={`/skills/${skill.slug}`}
          className="flex min-w-0 flex-col lg:flex-row lg:items-baseline lg:gap-3"
        >
          <span className="text-foreground group-hover:text-foreground/80 truncate text-base font-semibold transition-colors">
            {skill.name}
          </span>
          <span className="text-muted-foreground mt-0.5 truncate font-mono text-sm lg:mt-0">
            {skill.description}
          </span>
        </Link>

        <button
          onClick={() => onCopy(skill.slug)}
          title={getSkillInstallCommand(skill.slug)}
          className="text-muted-foreground hover:text-foreground flex shrink-0 cursor-pointer items-center gap-1.5 font-mono text-sm transition-colors"
        >
          <HugeiconsIcon icon={copied ? Tick02Icon : Copy01Icon} size={14} />
          <span className="hidden sm:inline">{copied ? t('copied') : t('copy')}</span>
        </button>
      </div>
    </li>
  );
}
