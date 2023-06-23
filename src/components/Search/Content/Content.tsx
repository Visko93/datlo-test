import { Initial } from './Initial';
import type { SearchProps } from './type';
import { ContentWrapper } from './sytle';
import { Loading } from './Loading';

export function Content({ list = [] }: SearchProps) {
  return (
    <ContentWrapper>
      {/* <Initial /> */}
      <Loading />
    </ContentWrapper>
  );
}
