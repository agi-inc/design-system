'use client';

import React, { useEffect, useRef, useState } from 'react';

import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@multion/ui-util';

const overlayVariants = cva(
  'w-full h-full flex items-center justify-center transition-opacity',
  {
    variants: {
      variant: {
        dark: 'bg-primary/75',
        medium: 'bg-primary/50',
        light: 'bg-primary/25',
      },
    },
    defaultVariants: {
      variant: 'medium',
    },
  }
);

interface MDSOverlayProps extends VariantProps<typeof overlayVariants> {
  targetRef: React.RefObject<HTMLElement>;
  content: React.ReactNode;
  onClick?: () => void;
}

export const MDSOverlay: React.FC<MDSOverlayProps> = ({
  targetRef,
  content: overlayContent,
  variant,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = targetRef.current;
    const overlay = overlayRef.current;

    if (!target || !overlay) return;

    const updateOverlayPosition = () => {
      const rect = target.getBoundingClientRect();
      const parentRect = target.offsetParent?.getBoundingClientRect() ?? {
        top: 0,
        left: 0,
      };
      overlay.style.top = `${rect.top - parentRect.top}px`;
      overlay.style.left = `${rect.left - parentRect.left}px`;
      overlay.style.width = `${rect.width}px`;
      overlay.style.height = `${rect.height}px`;
      overlay.style.borderRadius = getComputedStyle(target).borderRadius;
    };

    updateOverlayPosition();

    const resizeObserver = new ResizeObserver(updateOverlayPosition);
    resizeObserver.observe(target);

    const mutationObserver = new MutationObserver(updateOverlayPosition);
    mutationObserver.observe(target, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    window.addEventListener('resize', updateOverlayPosition);

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener('resize', updateOverlayPosition);
    };
  }, [targetRef]);

  return (
    <div
      ref={overlayRef}
      className={cn(
        'absolute overflow-hidden',
        onClick ? 'cursor-pointer' : ''
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div
        className={cn(
          overlayVariants({ variant }),
          isHovered ? 'opacity-100' : 'opacity-0'
        )}
      >
        {overlayContent}
      </div>
    </div>
  );
};

export default MDSOverlay;
