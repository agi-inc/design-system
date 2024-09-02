'use client';

import React, { ReactNode } from 'react';
import {
  Toast,
  ToastTitle,
  ToastDescription,
  ToastViewport,
  ToastProvider,
  ToastClose,
  type ToastProps,
} from '@multion/ui';
import { createRoot } from 'react-dom/client';

let toastRoot: HTMLDivElement | null = null;

export function showToast({
  title,
  description,
  variant = 'default',
  duration = 5000,
  root = document.body,
}: ToastProps & {
  title?: ReactNode;
  description?: ReactNode;
  duration?: number;
  root?: HTMLElement | ShadowRoot;
}) {
  if (!toastRoot) {
    toastRoot = document.createElement('div');
    root.appendChild(toastRoot);
  }

  const toastElement = document.createElement('div');
  toastRoot.appendChild(toastElement);

  const renderRoot = createRoot(toastElement);

  const handleRemove = () => {
    renderRoot.unmount();
    if (toastRoot && toastElement.parentNode === toastRoot) {
      toastRoot.removeChild(toastElement);
    }
  };

  renderRoot.render(
    <ToastProvider>
      <ToastViewport />
      <Toast
        variant={variant}
        open
        duration={duration}
        onOpenChange={(open) => !open && handleRemove()}
      >
        <div className="grid gap-1">
          {title && <ToastTitle>{title}</ToastTitle>}
          {description && <ToastDescription>{description}</ToastDescription>}
        </div>
        <ToastClose />
      </Toast>
    </ToastProvider>
  );

  return handleRemove;
}
