'use client';

import { Header, Content, Footer } from 'antd/es/layout/layout';
import styled from 'styled-components';

// Define styles here
const StyledHeader = styled(Header)`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  display: flex;
  align-items: center;
  color: #fff;
  background-color: #3e9e47;
`;

const StyledContent = styled(Content)`
  display: flex;
  flex-direction: column;
  justify-content: 'space-between';

  padding: 1em 4em;

  background-color: #fff;
`;

const StyledFooter = styled(Footer)`
  text-align: 'center';
  color: '#fff';
`;

export { StyledHeader as Header, StyledContent as Content, StyledFooter as Footer };
