import { Card, FloatButton } from 'antd';
import Title from 'antd/es/typography/Title';
import Image from 'next/image';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  width: 325px;
  height: 150px;

  &:hover {
    cursor: pointer;
  }
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
  position: relative;
  padding: 0 0.5rem 0.5rem 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex: 1 1 60;
  max-width: calc(60% - 1rem);
`;
const StyledActions = styled.div`
  position: relative;

  max-height: 100%;
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

const StyledFloatButton = styled(FloatButton)`
  position: static;

  width: 2rem;
  height: 2rem;

  box-shadow: none;

  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  }
`;

export {
  StyledCard as Card,
  StyledImage,
  StyledContent,
  StyledImageContainer,
  StyledActions,
  StyledTitle,
  StyledFloatButton
};
