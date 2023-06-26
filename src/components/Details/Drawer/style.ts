import { List } from 'antd';
import styled from 'styled-components';

const StyledHeader = styled.section<{ backgroundImage: string }>`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: left center;
  background-repeat: no-repeat;

  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: 1rem;
  position: relative;

  & h2 {
    color: #fff;
    font-size: 1.75rem;
    font-weight: 400;

    margin: 0;
    z-index: 2;
  }

  & h3 {
    color: #fff;
    font-size: 1.25rem;
    font-weight: 400;

    margin: 0;
  }

  & div {
    display: flex;

    z-index: 2;
  }

  svg {
    margin-right: 0.5rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.65);
    filter: blur(2px);

    z-index: 1;
  }
`;

const StyledContent = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.5rem;
  padding: 2rem 1rem;

  box-shadow: 0 1rem 1.25rem rgba(0, 0, 0, 0.082);
  background-color: rgba(0, 0, 0, 0.2);

  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 1rem;

  margin: 1rem;
`;

const StyledEpisodes = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0 1rem;

  color: #fff;
`;

const StyledList = styled(List)`
  box-shadow: 0 1rem 1.25rem rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.2);

  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 1rem;

  margin: 1rem;
  padding: 1rem;
`;

export { StyledHeader, StyledContent, StyledEpisodes, StyledList };
