'use client';

import { NextIntlClientProvider } from 'next-intl';

export default function NextIntlProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextIntlClientProvider locale="en" now={new Date()}>
      {children}
    </NextIntlClientProvider>
  );
}
