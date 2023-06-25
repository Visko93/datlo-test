import * as React from 'react';
import { Initial } from './Initial';
import type { SearchProps } from './type';
import { ContentWrapper } from './sytle';
import { List } from './List';
import data from '@/utils/mockData.json';

export function Content({ list = [] }: SearchProps) {
  if (data.results.length === 0)
    return (
      <>
        <ContentWrapper>
          <Initial />
        </ContentWrapper>
      </>
    );
  return <List list={data.results} />;
}
