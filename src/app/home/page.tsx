'use client';

import { Layout, Space, theme } from 'antd';
import { Content, Header } from './styles';
import { Input } from '@/components/Search/Input';

export default function Home() {
  const handleSearch = (value: string) => {
    if (value === '' || !value) return;
    console.log(value);
  };
  return (
    <Layout
      style={{
        padding: 0,
        margin: 0
      }}
    >
      <Header>Header</Header>
      <Content>
        <h1>(Rick & Morty) + Dex</h1>
        <Space
          align="end"
          style={{
            justifyContent: 'flex-end'
          }}
        >
          <Input
            placeholder="Search by character name"
            enterButton="Search"
            size="large"
            onSearch={handleSearch}
            allowClear
            loading={false}
          />
        </Space>
      </Content>
      {/* <Footer></Footer> */}
    </Layout>
  );
}
