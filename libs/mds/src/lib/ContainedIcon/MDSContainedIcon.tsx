import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@multion/ui-util';

const containedIconVariants = cva(
  'inline-flex items-center justify-center text-s flex-shrink-0',
  {
    variants: {
      type: {
        round: 'rounded-full',
        square: 'rounded',
      },
      cursor: {
        pointer: 'cursor-pointer',
        auto: 'cursor-auto',
        default: 'cursor-default',
      },
      containerColor: {
        primary: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        tertiary: 'bg-tertiary text-tertiary-foreground',
      },
      size: {
        sm: 'h-6 w-6 text-sm p-1',
        md: 'h-8 w-8 text-md p-1.5',
        lg: 'h-10 w-10 text-lg p-2',
      },
    },
  }
);

export interface MDSContainedIconProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containedIconVariants> {
  icon: JSX.Element;
  onClick?: () => void;
}

export function MDSContainedIcon({
  icon,
  cursor = 'auto',
  type = 'round',
  containerColor = 'secondary',
  size = 'sm',
  onClick,
}: MDSContainedIconProps) {
  return (
    <div
      className={cn(
        containedIconVariants({ type, cursor, containerColor, size })
      )}
      onClick={onClick}
    >
      {icon}
    </div>
  );
}
