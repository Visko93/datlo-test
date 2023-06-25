import * as React from 'react';
import { Initial } from './Initial';
import type { SearchProps } from './type';
import { ContentWrapper } from './sytle';
import { List } from './List';
import { Loading } from './Loading';
import { NotFound } from './NotFound';

const contentSwitch = (loading: boolean, list: any) => {
  if (loading) return <Loading />;
  if (list?.length === 0) return <NotFound />;
  return <Initial />;
};

export function Content({ loading, list }: SearchProps) {
  return (
    <>
      {list?.length !== 0 ? (
        <List list={list} />
      ) : (
        <ContentWrapper>{contentSwitch(loading, list)}</ContentWrapper>
      )}
    </>
  );
}
