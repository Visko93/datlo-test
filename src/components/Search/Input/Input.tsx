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
  onSearch = () => {},
  customStyles = {}
}: InputProps) {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#3e9e47'
        }
      }}
    >
      <SearchInput
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        allowClear={allowClear}
        enterButton={enterButton}
        size={size}
        loading={loading}
        onSearch={() => onSearch(value)}
        style={customStyles}
      />
    </ConfigProvider>
  );
}
