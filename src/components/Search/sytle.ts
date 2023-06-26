import { Content } from 'antd/es/layout/layout';
import styled from 'styled-components';

const StyledContent = styled(Content)`
  display: flex;
  flex-direction: column;
  justify-content: 'space-between';

  padding: 1em 4em;

  background-color: #000f;
  color: #fff;

  background-image: url('/assets/background.webp');
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
`;

export { StyledContent };
