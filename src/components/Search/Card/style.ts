import { Card } from 'antd';
import Title from 'antd/es/typography/Title';
import Image from 'next/image';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  width: 350px;
  height: 150px;
`;

const StyledImage = styled(Image)`
  border-radius: 8px 0 0 8px;
  position: relative;
`;
const StyledImageContainer = styled.div`
  position: relative;
  width: 40%;

  &::before {
    position: absolute;
    bottom: 0;
    right: 0;
    top: 0;
    content: '';
    background: gray;
    height: 100%;
    width: 50%;
    background: linear-gradient(
      270deg,
      rgba(13, 13, 16, 0.75) 0%,
      rgba(217, 217, 217, 0) 100%
    );

    z-index: 1;
  }
`;
const StyledContent = styled.div`
  padding: 0 0.5rem 0 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 65%;
`;
const StyledActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const StyledTitle = styled.h4`
  margin: 0.5rem 0 0.25rem 0;

  height: 1.7rem;
  font-weight: 600;
  font-size: 1.3rem;
  line-height: 0.85;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export {
  StyledCard as Card,
  StyledImage,
  StyledContent,
  StyledImageContainer,
  StyledActions,
  StyledTitle
};
