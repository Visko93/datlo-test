import { FloatButton } from 'antd';
import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledCard = styled(motion.div)`
  display: flex;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  width: 325px;
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
  position: relative;
  padding: 0 0 0 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  flex: 1;
  max-width: calc(60% - 1rem);
`;
const StyledActions = styled.div`
  position: relative;

  max-height: 100%;
  display: flex;
  justify-content: flex-end;

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const StyledTitle = styled.h4`
  margin: 0.75rem 0 0.25rem 0;

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

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0;
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
