import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { cn } from '../lib/cn';

const flexVariants = cva('flex', {
  variants: {
    direction: {
      row: 'flex-row',
      column: 'flex-col',
      'row-reverse': 'flex-row-reverse',
      'column-reverse': 'flex-col-reverse',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      baseline: 'items-baseline',
      stretch: 'items-stretch',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    wrap: {
      nowrap: 'flex-nowrap',
      wrap: 'flex-wrap',
      'wrap-reverse': 'flex-wrap-reverse',
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
  },
  defaultVariants: {
    direction: 'row',
    align: 'stretch',
    justify: 'start',
    wrap: 'nowrap',
  },
});

interface FlexProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof flexVariants> {
  as?: React.ElementType;
}

const Flex = ({
  as: Component = 'div',
  direction,
  align,
  justify,
  wrap,
  gap,
  className,
  children,
  ref,
  ...props
}: FlexProps & { ref?: React.Ref<HTMLDivElement> }) => {
  return (
    <Component
      ref={ref}
      className={cn(flexVariants({ direction, align, justify, wrap, gap }), className)}
      {...props}
    >
      {children}
    </Component>
  );
};

Flex.displayName = 'Flex';

export { Flex, flexVariants };
export type { FlexProps };
