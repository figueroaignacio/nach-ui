import { Logo } from '@/components/common/logo';

export type SkillsHeaderProps = {
  totalCount: number;
};

export function SkillsHeader({ totalCount }: SkillsHeaderProps) {
  return (
    <div className="mb-12">
      <h1 className="text-foreground mb-2 text-3xl font-semibold tracking-tight">
        <Logo size="skills" />
      </h1>
      <p className="text-muted-foreground font-mono text-base">
        figueroaignacio/ui-skills - {totalCount} skills
      </p>
    </div>
  );
}
