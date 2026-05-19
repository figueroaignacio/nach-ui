'use client';

import React from 'react';
import { Flex } from '../../layout/flex';

export function Default() {
  return (
    <Flex
      direction="row"
      align="center"
      justify="between"
      gap="4"
      className="border-border bg-card w-full rounded-xl border p-4"
    >
      <div className="bg-primary/20 text-primary border-primary/30 flex h-20 w-20 items-center justify-center rounded-lg border font-medium">
        Box 1
      </div>
      <div className="bg-secondary/20 text-secondary-foreground border-border flex h-20 w-20 items-center justify-center rounded-lg border font-medium">
        Box 2
      </div>
      <div className="bg-muted text-muted-foreground border-border flex h-20 w-20 items-center justify-center rounded-lg border font-medium">
        Box 3
      </div>
    </Flex>
  );
}
