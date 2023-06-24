import * as React from 'react';
import {
  AimOutlined,
  CommentOutlined,
  CustomerServiceOutlined,
  FireOutlined,
  PlusCircleOutlined
} from '@ant-design/icons';
import { Details } from './Details';
import {
  Card,
  StyledActions,
  StyledContent,
  StyledFloatButton,
  StyledImage,
  StyledImageContainer,
  StyledTitle
} from './style';
import { Button, FloatButton, Skeleton, Space } from 'antd';
import { RemoveButton } from './RemoveButton';
import { Drawer } from '@/components/Details/Drawer/Drawer';
import type { CardProps } from '../Content/type';

function CharacterCard({ character, loading, onClick }: CardProps) {
  if (!character) return null;
  const { name, image, location, status, id } = character;
  const [open, setOpen] = React.useState(true);

  const onChange = (checked: boolean) => {
    setOpen(checked);
  };
  return (
    <Card onClick={() => onClick(id)}>
      <StyledImageContainer>
        {!loading ? (
          <StyledImage src={image} alt="Rick Sanchez" width={128} height={150} />
        ) : (
          <Skeleton.Image
            active={loading}
            style={{
              width: 128,
              height: 150
            }}
          />
        )}
      </StyledImageContainer>
      <Skeleton loading={loading} active style={{ padding: '0 1em' }}>
        <StyledContent>
          <StyledTitle>{name}</StyledTitle>
          <Space direction="vertical">
            <Details text={location?.name || 'Not Found'} icon={<AimOutlined />} />
            <Details text={status || 'Unknown'} icon={<FireOutlined />} />
          </Space>
          <StyledActions>
            <StyledFloatButton onClick={() => console.log('click')} />
            <StyledFloatButton onClick={() => console.log('click')} />
          </StyledActions>
        </StyledContent>
      </Skeleton>
    </Card>
  );
}

export { CharacterCard };
