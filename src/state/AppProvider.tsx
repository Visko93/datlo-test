import * as React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { DetailsProvider } from './Details';
import { queryClient } from '@/services';
import { SearchProvider } from './Search';
import { ConfigProvider } from 'antd';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#3e9e47',
            fontFamily: inter.style.fontFamily,
            colorPrimaryText: '#fff',
            colorText: '#FFF',
            colorTextDisabled: '#FdFdFd',
            colorBgElevated: '#3e9e47',
            colorTextDescription: '#FFF'
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
