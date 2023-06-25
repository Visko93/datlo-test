import { Space } from 'antd';
import { Content } from 'antd/es/layout/layout';
import styled from 'styled-components';

const StyledContent = styled(Content)`
  display: flex;
  flex-direction: column;
  justify-content: 'space-between';

  padding: 1em 4em;

  background-color: #fff;
`;

export { StyledContent };
