import styled from 'styled-components';

const StyledDetails = styled.div`
  display: flex;
  position: relative;

  & p {
    margin: 0.25rem 0;
  }
  & :is(:first-child) {
    margin-right: 0.25rem;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;

    background-image: linear-gradient(to right, #000, transparent);
  }
`;

export { StyledDetails };
