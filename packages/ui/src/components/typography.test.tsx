import { cleanup, render, screen } from '@testing-library/react';
import * as React from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { Typography } from './typography';

afterEach(cleanup);

describe('Typography component', () => {
  it('renders a paragraph by default', () => {
    render(<Typography>Hello World</Typography>);
    const element = screen.getByText('Hello World');
    expect(element.tagName).toBe('P');
    expect(element.className).toContain('leading-7');
  });

  it('changes HTML element based on variant', () => {
    render(<Typography variant="h1">Header 1</Typography>);
    const element = screen.getByText('Header 1');
    expect(element.tagName).toBe('H1');
    expect(element.className).toContain('text-4xl');
  });

  it('customizes element using "as" prop', () => {
    render(
      <Typography variant="h1" as="span">
        Span Header
      </Typography>,
    );
    const element = screen.getByText('Span Header');
    expect(element.tagName).toBe('SPAN');
    expect(element.className).toContain('text-4xl');
  });

  it('applies alignment and weight variants', () => {
    render(
      <Typography align="center" weight="bold">
        Styled Text
      </Typography>,
    );
    const element = screen.getByText('Styled Text');
    expect(element.className).toContain('text-center');
    expect(element.className).toContain('font-bold');
  });

  it('forwards refs correctly', () => {
    const ref = React.createRef<HTMLParagraphElement>();
    render(<Typography ref={ref}>Ref Text</Typography>);
    expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
  });
});
