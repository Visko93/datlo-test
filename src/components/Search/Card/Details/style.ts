import styled from 'styled-components';

const StyledDetails = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;

  margin: 0.1rem 0 0.1rem 0.5rem;

  & p {
    font-size: 0.75rem;
    line-height: 1.1;

    margin: 1px 0;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  & :is(:first-child) {
    margin: 0;
    margin-right: 0.25rem;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -0.3rem;
    left: 0;

    background-image: linear-gradient(to right, #000, transparent);
  }
`;

export { StyledDetails };
