import { SearchInput } from './style';
import type { InputProps } from './type';

export function Input({ customStyles = {} }: InputProps) {
  const onSearch = (value: string) => console.log(value);

  return (
    <SearchInput
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
      style={customStyles}
    />
  );
}
