import * as React from 'react';
import { Initial } from './Initial';
import type { SearchProps } from './type';
import { ContentWrapper } from './sytle';
import { Loading } from './Loading';
import { NotFound } from './NotFound';
import { List } from './List';
import data from '@/utils/mockData.json';
import { Drawer } from '@/components/Details/Drawer';
import { useDetails } from '@/state/Details';
import { useDrawer } from '@/components/Details/hooks';

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
