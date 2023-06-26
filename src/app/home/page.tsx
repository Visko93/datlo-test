'use client';

import * as React from 'react';
import { Header, Layout } from './styles';
import { AppProviders } from '@/state/AppProvider';
import { Search } from '@/components/Search';

export default function Home() {
  return (
    <AppProviders>
      <Layout>
        <Header />
        <Search />
      </Layout>
    </AppProviders>
  );
}
