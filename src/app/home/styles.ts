'use client';

import { Header, Footer } from 'antd/es/layout/layout';
import styled from 'styled-components';

// Define styles here
const StyledHeader = styled(Header)`
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  color: #fff;
  background-color: #3e9e47;
`;

const StyledFooter = styled(Footer)`
  text-align: 'center';
  color: '#fff';
`;

export { StyledHeader as Header, StyledFooter as Footer };
