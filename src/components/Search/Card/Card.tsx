import {
  AimOutlined,
  AudioOutlined,
  FireOutlined,
  MinusCircleOutlined
} from '@ant-design/icons';
import { Details } from './Details';
import {
  Card,
  StyledActions,
  StyledContent,
  StyledImage,
  StyledImageContainer
} from './style';
import { CardProps } from './type';
import { Skeleton, Space } from 'antd';
import Title from 'antd/es/typography/Title';
import { RemoveButton } from './RemoveButton';

function CharacterCard({ loading = false, image = '/assets/rick.png' }: CardProps) {
  return (
    <Card>
      <StyledImageContainer>
        {!loading ? (
          <StyledImage
            src="/assets/rick.png"
            alt="Rick Sanchez"
            width={128}
            height={150}
          />
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
          <Title level={4} style={{ margin: 0 }}>
            Rick Sanchez
          </Title>
          <Space direction="vertical">
            <Details text="Citadel of Ricks" icon={<AimOutlined />} />
            <Details text="Alive" icon={<FireOutlined />} />
          </Space>
          <StyledActions>
            <RemoveButton loading={false} onClick={() => {}} />
          </StyledActions>
        </StyledContent>
      </Skeleton>
    </Card>
  );
}

export { CharacterCard };
