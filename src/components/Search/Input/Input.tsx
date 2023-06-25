import * as React from 'react';
import { ConfigProvider } from 'antd';
import { SearchInput } from './style';
import type { InputProps } from './type';

export function Input({
  placeholder = 'Search',
  allowClear = true,
  enterButton = 'Search',
  size = 'middle',
  loading = false,
  customStyles = {},
  search,
  handleSearch = () => {},
  handleChange = () => {}
}: InputProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#3e9e47'
        }
      }}
    >
      <SearchInput
        value={search}
        onChange={handleChange}
        placeholder={placeholder}
        allowClear={allowClear}
        enterButton={enterButton}
        size={size}
        loading={loading}
        onSearch={handleSearch}
        style={customStyles}
      />
    </ConfigProvider>
  );
}
