'use client';

import styled from 'styled-components';
import { Layout } from 'antd';

const StyledLayout = styled(Layout)`
  padding: 0;
  margin: 0;
`;
// Define styles here
const StyledHeader = styled(Layout.Header)`
  width: 100%;
  display: flex;
  align-items: center;
  color: #fff;
  background-color: #9ed64f;

  height: 64px;

  background-image: url('/assets/header.webp');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export { StyledHeader as Header, StyledLayout as Layout };
