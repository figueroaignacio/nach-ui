'use client';

import React from 'react';
import { Container } from '../../layout/container';

export function Default() {
  return (
    <Container
      size="md"
      align="center"
      className="border-border bg-card rounded-xl border p-6 text-center"
    >
      <h3 className="mb-2 text-lg font-semibold">Max-width Medium Container</h3>
      <p className="text-muted-foreground text-sm">
        This container is constrained to a medium size (max-width: 768px) and centered on the page.
      </p>
    </Container>
  );
}
