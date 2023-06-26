import * as React from 'react';
import { StyledContent } from './sytle';
import { Affix, Badge, Button, Pagination, Space } from 'antd';
import { Input } from './Input';
import { Content } from './Content';
import { BLACKLIST_CHARACTER_CLEAR, CHANGE_SEARCH, useSearch } from '@/state/Search';
import { useSearchCharacter } from './hooks/useSearchCharacter';

export function Search() {
  const { state, dispatch } = useSearch();
  const [input, setInput] = React.useState('');
  const { isLoading, page, handlePageChange } = useSearchCharacter();

  const list = state.data.list?.results;
  const metaList = state.data.list?.info;
  const blackListCount = state.data.blackListed.length;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    dispatch && dispatch({ type: CHANGE_SEARCH, payload: input });
    handlePageChange(1);
  };

  const handleClearBlackList = () => {
    dispatch && dispatch({ type: BLACKLIST_CHARACTER_CLEAR });
  };

  return (
    <StyledContent>
      <Space
        align="end"
        style={{
          justifyContent: 'space-between'
        }}
      >
        <Affix offsetTop={10}>
          <Badge count={blackListCount}>
            <Button type="primary" onClick={handleClearBlackList}>
              Clear Blacklist
            </Button>
          </Badge>
        </Affix>
        <Input
          placeholder="Search by character name"
          enterButton="Search"
          size="middle"
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
