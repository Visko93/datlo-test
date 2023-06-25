import * as React from 'react';
import { StyledContent } from './sytle';
import { Pagination, PaginationProps, Space } from 'antd';
import { Input } from './Input';
import { Content } from './Content';
import { CHANGE_PAGE, CHANGE_SEARCH, useSearch } from '@/state/Search';
import { useSearchCharacter } from './hooks/useSearchCharacter';

export function Search() {
  const { state, dispatch } = useSearch();
  const [input, setInput] = React.useState('');
  const { isLoading, page, handlePageChange } = useSearchCharacter();

  const list = state.data.list?.results;
  const metaList = state.data.list?.info;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    dispatch && dispatch({ type: CHANGE_SEARCH, payload: input });
    handlePageChange(1);
  };

  console.debug('isLoading', isLoading);
  console.debug('State', state);
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
          handleSearch={handleSearch}
          handleChange={handleSearchChange}
          search={input}
          allowClear
          loading={false}
        />
      </Space>
      <Content loading={isLoading} list={list} />
      <Pagination
        current={page}
        onChange={handlePageChange}
        total={metaList?.count || 0}
        style={{
          marginTop: '1rem',
          textAlign: 'center'
        }}
        hideOnSinglePage
        showSizeChanger={false}
      />
    </StyledContent>
  );
}
