import { AimOutlined, FireOutlined } from '@ant-design/icons';
import { Details } from './Details';
import {
  Card,
  StyledActions,
  StyledContent,
  StyledImage,
  StyledImageContainer,
  StyledTitle
} from './style';
import { CardProps } from './type';
import { Skeleton, Space } from 'antd';
import { RemoveButton } from './RemoveButton';
import { Drawer } from '@/components/Details/Drawer/Drawer';

function CharacterCard({ character, loading }: CardProps) {
  if (!character) return null;
  const { name, image, location, status, id } = character;
  return (
    <Drawer characterId={id}>
      <Card>
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
              <RemoveButton loading={false} onClick={() => {}} />
            </StyledActions>
          </StyledContent>
        </Skeleton>
      </Card>
    </Drawer>
  );
}

export { CharacterCard };
