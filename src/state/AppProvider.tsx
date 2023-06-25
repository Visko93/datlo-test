import * as React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { DetailsProvider } from './Details';
import { queryClient } from '@/api';
import { SearchProvider } from './Search';
import { ConfigProvider } from 'antd';

function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#3e9e47'
          }
        }}
      >
        <SearchProvider>
          <DetailsProvider>{children}</DetailsProvider>
        </SearchProvider>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export { AppProviders };
