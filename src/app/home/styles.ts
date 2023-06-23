'use client';

import { Header, Content, Footer } from 'antd/es/layout/layout';
import styled from 'styled-components';

// Define styles here
const StyledHeader = styled(Header)`
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  color: #fff;
  background-color: #3e9e47;
`;

const StyledContent = styled(Content)`
  text-align: 'center';
  background-color: '#f5ff';
`;

const StyledFooter = styled(Footer)`
  text-align: 'center';
  background-color: '#f54f';
  color: '#fff';
`;

export { StyledHeader as Header, StyledContent as Content, StyledFooter as Footer };
