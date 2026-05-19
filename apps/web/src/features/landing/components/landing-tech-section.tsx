import {
  MotionIcon,
  NextJSIcon,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon,
} from '@/components/common/tech-icons';
import { Typography } from '@repo/ui/components/typography';
import { Container } from '@repo/ui/layout/container';
import { Grid } from '@repo/ui/layout/grid';
import { Stack } from '@repo/ui/layout/stack';
import { useTranslations } from 'next-intl';

interface TechnologyConfig {
  icon: React.ReactNode;
  span?: string;
  gradient: string;
  accentColor: string;
}

const technologiesConfig: Record<string, TechnologyConfig> = {
  TypeScript: {
    icon: <TypescriptIcon />,
    gradient: 'from-blue-500/20 via-blue-400/10 to-transparent',
    accentColor: 'blue',
  },
  React: {
    icon: <ReactIcon />,
    span: 'lg:col-span-2',
    gradient: 'from-cyan-500/20 via-blue-400/10 to-transparent',
    accentColor: 'cyan',
  },
  'Next.js': {
    icon: <NextJSIcon />,
    gradient: 'from-slate-900/20 via-slate-700/10 to-transparent',
    accentColor: 'slate',
  },
  Motion: {
    icon: <MotionIcon />,
    gradient: 'from-purple-500/20 via-pink-400/10 to-transparent',
    accentColor: 'purple',
    span: '',
  },
  'Tailwind CSS': {
    icon: <TailwindIcon />,
    gradient: 'from-cyan-400/20 via-cyan-300/10 to-transparent',
    accentColor: 'cyan',
  },
};

export function LandingTechSection() {
  const t = useTranslations('sections.home.tech');

  const technologies = t.raw('technologies') as Array<{
    name: string;
    description: string;
  }>;

  return (
    <section className="bg-background relative w-full overflow-hidden py-16 md:py-24 lg:py-32">
      <Container size="2xl" className="relative z-10">
        <div className="mb-12 md:mb-16">
          <Typography
            variant="h2"
            className="gradient-text mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
          >
            {t('title')}
          </Typography>
          <Typography variant="p" className="text-muted-foreground max-w-2xl text-lg">
            {t('subtitle')}
          </Typography>
        </div>
        <Grid columns="1" gap="2" className="md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => {
            const config = technologiesConfig[tech.name];
            return (
              <div key={tech.name} className={`group relative h-full ${config.span || ''}`}>
                <div className="bg-card border-border h-full overflow-hidden rounded-xl border">
                  <Stack justify="between" className="relative z-10 h-full p-6">
                    <div>
                      <div className="mb-6 flex items-center justify-between">
                        <div className="">{config.icon}</div>
                      </div>
                      <Typography
                        variant="h3"
                        className="text-card-foreground group-hover:text-foreground mb-3 text-xl font-semibold transition-colors duration-300"
                      >
                        {tech.name}
                      </Typography>
                      <Typography
                        variant="p"
                        className="text-muted-foreground group-hover:text-card-foreground/80 text-sm leading-relaxed transition-colors duration-300"
                      >
                        {tech.description}
                      </Typography>
                    </div>
                  </Stack>
                </div>
              </div>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
}
