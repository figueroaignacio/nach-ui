'use client';

import { Copy01Icon, Tick02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { useTranslations } from 'next-intl';

interface SkillsCopyButtonProps {
  onClick: () => void;
  title: string;
  copied: boolean;
}

export function SkillsCopyButton({ onClick, title, copied }: SkillsCopyButtonProps) {
  const t = useTranslations('components.skillsList');

  return (
    <button
      onClick={onClick}
      title={title}
      className="text-muted-foreground hover:text-foreground flex shrink-0 cursor-pointer items-center gap-1.5 font-mono text-sm transition-colors"
    >
      <HugeiconsIcon icon={copied ? Tick02Icon : Copy01Icon} size={14} />
      <span className="hidden sm:inline">{copied ? t('copied') : t('copy')}</span>
    </button>
  );
}
