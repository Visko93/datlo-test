'use client';

import { Layout } from 'antd';
import { Content, Footer, Header } from './styles';

export default function Home() {
  return (
    <Layout
      style={{
        padding: 0,
        margin: 0
      }}
    >
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}
