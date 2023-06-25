import * as React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { DetailsProvider } from './Details';
import { queryClient } from '@/api';
import { SearchProvider } from './Search';

function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <DetailsProvider>{children}</DetailsProvider>
      </SearchProvider>
    </QueryClientProvider>
  );
}

export { AppProviders };
