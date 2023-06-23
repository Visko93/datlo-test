import { Input } from 'antd';

import styled from 'styled-components';
const { Search } = Input;

const SearchInput = styled(Search)`
  width: 470px;

  & .ant-input-affix-wrapper {
    height: 35px;
  }

  & .ant-btn {
    width: 100%;
    height: 35px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export { SearchInput };
