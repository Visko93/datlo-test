import * as React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { DetailsProvider } from './Details';
import { queryClient } from '@/api';

function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <DetailsProvider>{children}</DetailsProvider>
    </QueryClientProvider>
  );
}

export { AppProviders };
