import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@multion/ui-util';

const inputVariants = cva(
  'flex w-full rounded-xs border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:shadow text-base',
  {
    variants: {
      variantSize: {
        small: 'h-6',
        medium: 'h-8',
        large: 'h-10',
      },
    },
    defaultVariants: {
      variantSize: 'large',
    },
  },
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variantSize, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variantSize }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';

export { Input, inputVariants };
