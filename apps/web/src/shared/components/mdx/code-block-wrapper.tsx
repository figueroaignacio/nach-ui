'use client';

import { Button } from '@repo/ui/components/button';
import { useTranslations } from 'next-intl';
import { cloneElement, useState } from 'react';

interface CodeBlockProps {
  expandButton?: React.ReactNode;
  isExpanded?: boolean;
}

interface CodeBlockWrapperProps {
  children: React.ReactElement<CodeBlockProps>;
  expandButtonTitle?: string;
}

export function CodeBlockWrapper({ children }: CodeBlockWrapperProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = useTranslations('components.codeblockWrapper');

  const expandButton = (
    <Button
      variant="link"
      size="sm"
      onClick={() => setIsExpanded((prev) => !prev)}
      className="text-white"
    >
      {isExpanded ? <>{t('collapse')}</> : <>{t('expand')}</>}
    </Button>
  );

  return cloneElement(children, { expandButton, isExpanded });
}
