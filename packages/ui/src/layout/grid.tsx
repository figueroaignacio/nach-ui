import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { cn } from '../lib/cn';

const gridVariants = cva('grid', {
  variants: {
    columns: {
      '1': 'grid-cols-1',
      '2': 'grid-cols-2',
      '3': 'grid-cols-3',
      '4': 'grid-cols-4',
      '5': 'grid-cols-5',
      '6': 'grid-cols-6',
      '7': 'grid-cols-7',
      '8': 'grid-cols-8',
      '9': 'grid-cols-9',
      '10': 'grid-cols-10',
      '11': 'grid-cols-11',
      '12': 'grid-cols-12',
      none: 'grid-cols-none',
      subgrid: 'grid-cols-subgrid',
    },
    rows: {
      '1': 'grid-rows-1',
      '2': 'grid-rows-2',
      '3': 'grid-rows-3',
      '4': 'grid-rows-4',
      '5': 'grid-rows-5',
      '6': 'grid-rows-6',
      none: 'grid-rows-none',
      subgrid: 'grid-rows-subgrid',
    },
    flow: {
      row: 'grid-flow-row',
      col: 'grid-flow-col',
      dense: 'grid-flow-dense',
      'row-dense': 'grid-flow-row-dense',
      'col-dense': 'grid-flow-col-dense',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      baseline: 'items-baseline',
      stretch: 'items-stretch',
    },
    justify: {
      start: 'justify-items-start',
      center: 'justify-items-center',
      end: 'justify-items-end',
      stretch: 'justify-items-stretch',
    },
    gap: {
      '0': 'gap-0',
      '1': 'gap-1',
      '2': 'gap-2',
      '3': 'gap-3',
      '4': 'gap-4',
      '5': 'gap-5',
      '6': 'gap-6',
      '8': 'gap-8',
      '10': 'gap-10',
      '12': 'gap-12',
      '16': 'gap-16',
      '20': 'gap-20',
      '24': 'gap-24',
      '32': 'gap-32',
    },
    gapX: {
      '0': 'gap-x-0',
      '1': 'gap-x-1',
      '2': 'gap-x-2',
      '3': 'gap-x-3',
      '4': 'gap-x-4',
      '5': 'gap-x-5',
      '6': 'gap-x-6',
      '8': 'gap-x-8',
      '10': 'gap-x-10',
      '12': 'gap-x-12',
      '16': 'gap-x-16',
      '20': 'gap-x-20',
      '24': 'gap-x-24',
      '32': 'gap-x-32',
    },
    gapY: {
      '0': 'gap-y-0',
      '1': 'gap-y-1',
      '2': 'gap-y-2',
      '3': 'gap-y-3',
      '4': 'gap-y-4',
      '5': 'gap-y-5',
      '6': 'gap-y-6',
      '8': 'gap-y-8',
      '10': 'gap-y-10',
      '12': 'gap-y-12',
      '16': 'gap-y-16',
      '20': 'gap-y-20',
      '24': 'gap-y-24',
      '32': 'gap-y-32',
    },
  },
  defaultVariants: {
    columns: '1',
  },
});

interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof gridVariants> {
  as?: React.ElementType;
}

const Grid = ({
  as: Component = 'div',
  columns,
  rows,
  flow,
  align,
  justify,
  gap,
  gapX,
  gapY,
  className,
  children,
  ref,
  ...props
}: GridProps & { ref?: React.Ref<HTMLDivElement> }) => {
  return (
    <Component
      ref={ref}
      className={cn(
        gridVariants({ columns, rows, flow, align, justify, gap, gapX, gapY }),
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

Grid.displayName = 'Grid';

export { Grid, gridVariants };
export type { GridProps };
