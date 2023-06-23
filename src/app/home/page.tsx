'use client';

import { Layout, Space } from 'antd';
import { Content, Footer, Header } from './styles';
import { Input } from '@/components/Search/Input';

export default function Home() {
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
          <Input customStyles={{ justifySelf: 'flex-end' }} />
        </Space>
      </Content>
      {/* <Footer></Footer> */}
    </Layout>
  );
}
