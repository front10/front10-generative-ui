'use client';

import { GenerativeUIProvider } from '@front10/generative-ui';

export function GenerativeUIProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <GenerativeUIProvider>{children}</GenerativeUIProvider>;
}
