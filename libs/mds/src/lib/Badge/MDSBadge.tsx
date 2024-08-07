import React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@multion/ui-util';

const badgeVariants = cva(
  'inline-flex items-center justify-center text-s rounded-full flex-shrink-0',
  {
    variants: {
      type: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        tertiary: 'bg-tertiary text-tertiary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      },
      size: {
        sm: 'h-6 w-6 text-sm',
        md: 'h-8 w-8 text-md',
        lg: 'h-10 w-10 text-lg',
      },
      cursor: {
        pointer: 'cursor-pointer',
        auto: 'cursor-auto',
        default: 'cursor-default',
      },
    },
    defaultVariants: {
      type: 'default',
      size: 'md',
    },
  }
);
export interface MDSBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  type?: 'default' | 'secondary' | 'tertiary' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  cursor?: 'pointer' | 'auto' | 'default';
  content: string;
  asChild?: boolean;
}

export const MDSBadge = React.forwardRef<HTMLDivElement, MDSBadgeProps>(
  (
    {
      type = 'default',
      size = 'md',
      cursor = 'pointer',
      content = '',
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        ref={ref}
        className={cn(badgeVariants({ type, size, cursor }))}
        {...props}
      >
        {content}
      </Comp>
    );
  }
);
MDSBadge.displayName = 'Badge';
