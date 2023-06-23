import { Initial } from './Initial';
import type { SearchProps } from './type';
import { ContentWrapper } from './sytle';
import { Loading } from './Loading';
import { NotFound } from './NotFound';
import { List } from './List';

export function Content({ list = [] }: SearchProps) {
  return (
    <ContentWrapper>
      {/* <Initial /> */}
      {/* <Loading /> */}
      {/* <NotFound /> */}
      <List />
    </ContentWrapper>
  );
}
