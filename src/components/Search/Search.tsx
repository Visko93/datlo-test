import * as React from 'react';
import { StyledContent } from './sytle';
import { Space } from 'antd';
import { Input } from './Input';
import { Content } from './Content';
import { useSearch } from '@/state/Search';
import { useSearchInitial } from './hooks/useSearchInitial';

export function Search() {
  const { state, dispatch } = useSearch();
  const { isLoading, isError } = useSearchInitial({ page: 1 });

  console.debug('data', state);
  const [search, setSearch] = React.useState<string>();
  const handleSearch = (value: string) => {
    if (value === '' || !value) return;
  };

  return (
    <StyledContent>
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
      <Content list={[]} loading={true} />
    </StyledContent>
  );
}
