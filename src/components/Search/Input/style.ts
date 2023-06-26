import { Input } from 'antd';

import styled from 'styled-components';
const { Search } = Input;

const SearchInput = styled(Search)`
  width: 470px;

  & .ant-input {
    color: #0c0c0c;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export { SearchInput };
