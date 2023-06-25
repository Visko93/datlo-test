import * as React from 'react';
import { SearchInput } from './style';
import type { InputProps } from './type';

export function Input({
  placeholder = 'Search',
  enterButton = 'Search',
  size = 'middle',
  loading = false,
  customStyles = {},
  search,
  handleSearch = () => {},
  handleChange = () => {}
}: InputProps) {
  return (
    <SearchInput
      value={search}
      onChange={handleChange}
      onSearch={handleSearch}
      placeholder={placeholder}
      enterButton={enterButton}
      size={size}
      loading={loading}
      style={customStyles}
    />
  );
}
