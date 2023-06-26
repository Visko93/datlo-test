'use client';

import * as React from 'react';
import { Layout } from 'antd';
import { Header } from './styles';
import { AppProviders } from '@/state/AppProvider';
import { Search } from '@/components/Search';

export default function Home() {
  return (
    <AppProviders>
      <Layout
        style={{
          padding: 0,
          margin: 0
        }}
      >
        <Header />
        <Search />
        {/* <Footer></Footer> */}
      </Layout>
    </AppProviders>
  );
}
