import { Card } from 'antd';
import Image from 'next/image';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  width: 300px;
  height: 150px;
`;

const StyledImage = styled(Image)`
  border-radius: 8px 0 0 8px;
  position: relative;

  &::after {
    content: '';
    width: 64px;
    height: 150px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;

    background: linear-gradient(
      270deg,
      rgba(13, 13, 16, 0.75) 0%,
      rgba(217, 217, 217, 0) 100%
    );

    z-index: 1;
  }
`;
const StyledImageContainer = styled.div``;
const StyledContent = styled.div`
  padding: 0 0.5rem 0 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
`;
const StyledActions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem;
`;

export {
  StyledCard as Card,
  StyledImage,
  StyledContent,
  StyledImageContainer,
  StyledActions
};
