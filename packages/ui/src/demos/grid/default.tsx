'use client';

import React from 'react';
import { Grid } from '../../layout/grid';

export function Default() {
  return (
    <Grid columns="3" gap="4" className="border-border bg-card w-full rounded-xl border p-4">
      <div className="bg-primary/20 text-primary border-primary/30 flex h-24 items-center justify-center rounded-lg border font-medium">
        Grid 1
      </div>
      <div className="bg-secondary/20 text-secondary-foreground border-border flex h-24 items-center justify-center rounded-lg border font-medium">
        Grid 2
      </div>
      <div className="bg-muted text-muted-foreground border-border flex h-24 items-center justify-center rounded-lg border font-medium">
        Grid 3
      </div>
      <div className="bg-card border-border text-card-foreground flex h-24 items-center justify-center rounded-lg border font-medium">
        Grid 4
      </div>
      <div className="bg-primary/10 border-primary/20 text-primary flex h-24 items-center justify-center rounded-lg border font-medium">
        Grid 5
      </div>
      <div className="bg-secondary/10 border-secondary/20 text-secondary-foreground flex h-24 items-center justify-center rounded-lg border font-medium">
        Grid 6
      </div>
    </Grid>
  );
}
