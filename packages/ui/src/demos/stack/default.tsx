'use client';

import React from 'react';
import { Stack } from '../../layout/stack';

export function Default() {
  return (
    <Stack
      gap="3"
      align="stretch"
      className="border-border bg-card w-full max-w-md rounded-xl border p-4"
    >
      <div className="bg-primary/20 text-primary border-primary/30 flex h-12 items-center justify-center rounded-lg border font-medium">
        Stack Item 1
      </div>
      <div className="bg-secondary/20 text-secondary-foreground border-border flex h-12 items-center justify-center rounded-lg border font-medium">
        Stack Item 2
      </div>
      <div className="bg-muted text-muted-foreground border-border flex h-12 items-center justify-center rounded-lg border font-medium">
        Stack Item 3
      </div>
    </Stack>
  );
}
