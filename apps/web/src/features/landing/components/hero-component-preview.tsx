'use client';

import { Container } from '@repo/ui/layout/container';
import { Flex } from '@repo/ui/layout/flex';
import { Grid } from '@repo/ui/layout/grid';
import { Stack } from '@repo/ui/layout/stack';
import { PreviewAccordion } from './preview-cards/preview-accordion';
import { PreviewBadges } from './preview-cards/preview-badges';
import { PreviewButtonVariants } from './preview-cards/preview-button-variants';
import { PreviewControls } from './preview-cards/preview-controls';
import { PreviewDeploy } from './preview-cards/preview-deploy';
import { PreviewFiles } from './preview-cards/preview-files';
import { PreviewMenu } from './preview-cards/preview-menu';
import { PreviewMfa } from './preview-cards/preview-mfa';
import { PreviewNotifications } from './preview-cards/preview-notifications';
import { PreviewProfile } from './preview-cards/preview-profile';
import { PreviewProjectActions } from './preview-cards/preview-project-actions';
import { PreviewSchema } from './preview-cards/preview-schema';
import { PreviewSpinners } from './preview-cards/preview-spinners';
import { PreviewStatus } from './preview-cards/preview-status';
import { PreviewTabs } from './preview-cards/preview-tabs';
import { PreviewTasks } from './preview-cards/preview-tasks';
import { PreviewTeam } from './preview-cards/preview-team';
import { PreviewUpgrade } from './preview-cards/preview-upgrade';
import { PreviewWorkspace } from './preview-cards/preview-workspace';

export function HeroComponentPreview() {
  return (
    <Container className="mt-16 px-0" size="2xl">
      <div className="border-border bg-background relative overflow-hidden rounded-sm border backdrop-blur-xl">
        <Flex
          align="center"
          justify="between"
          className="border-border bg-muted/50 border-b px-4 py-3"
        >
          <Flex gap="2">
            <div className="bg-destructive size-3 rounded-full" />
            <div className="bg-warning size-3 rounded-full" />
            <div className="bg-success size-3 rounded-full" />
          </Flex>
        </Flex>
        <Grid columns="1" gap="6" className="relative p-6 sm:grid-cols-2 lg:grid-cols-3">
          <Stack gap="6">
            <PreviewWorkspace />
            <PreviewButtonVariants />
            <PreviewProjectActions />
            <PreviewAccordion />
            <PreviewTasks />
            <PreviewNotifications />
          </Stack>
          <Stack gap="6">
            <PreviewMfa />
            <PreviewSpinners />
            <PreviewMenu />
            <PreviewControls />
            <PreviewProfile />
            <PreviewUpgrade />
          </Stack>
          <Stack gap="6">
            <PreviewDeploy />
            <PreviewTabs />
            <PreviewFiles />
            <PreviewBadges />
            <PreviewTeam />
            <PreviewStatus />
            <PreviewSchema />
          </Stack>
        </Grid>
      </div>
    </Container>
  );
}
