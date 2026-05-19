import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { cn } from '../lib/cn';

const containerVariants = cva('w-full px-4 sm:px-6 lg:px-8', {
  variants: {
    size: {
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-screen-lg',
      xl: 'max-w-screen-xl',
      '2xl': 'max-w-screen-2xl',
      fluid: 'max-w-full',
    },
    align: {
      left: 'mr-auto ml-0',
      center: 'mx-auto',
      right: 'ml-auto mr-0',
    },
  },
  defaultVariants: {
    size: 'xl',
    align: 'center',
  },
});

interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {
  as?: React.ElementType;
}

const Container = ({
  as: Component = 'div',
  size,
  align,
  className,
  children,
  ref,
  ...props
}: ContainerProps & { ref?: React.Ref<HTMLDivElement> }) => {
  return (
    <Component ref={ref} className={cn(containerVariants({ size, align }), className)} {...props}>
      {children}
    </Component>
  );
};

Container.displayName = 'Container';

export { Container, containerVariants };
export type { ContainerProps };
