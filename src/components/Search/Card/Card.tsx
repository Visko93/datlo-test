import * as React from 'react';
import { AimOutlined, FireOutlined, MinusCircleOutlined } from '@ant-design/icons';
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
import { Button, Skeleton, Space } from 'antd';
import type { CardProps } from '../Content/type';
import {
  GET_SELECT_CHARACTER,
  OPEN_CHARACTER_DETAILS,
  useDetails
} from '@/state/Details';
import { BLACKLIST_CHARACTER } from '@/state/Search';

function CharacterCard({ character, loading }: CardProps) {
  if (!character) return null;
  const { dispatch } = useDetails();
  const { name, image, location, status, id } = character;

  const hadleCharacterSelect = () => {
    dispatch && dispatch({ type: GET_SELECT_CHARACTER, payload: id! });
    dispatch && dispatch({ type: OPEN_CHARACTER_DETAILS });
  };

  const handleRemoveCharacter = () => {
    console.debug('Remove Character', id);
    dispatch && dispatch({ type: BLACKLIST_CHARACTER, payload: id! });
  };

  return (
    <Card>
      <StyledImageContainer>
        {!loading ? (
          <StyledImage src={image!} alt="Rick Sanchez" width={128} height={150} />
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
            <StyledFloatButton icon={<FireOutlined />} onClick={hadleCharacterSelect} />
            <StyledFloatButton
              icon={<MinusCircleOutlined />}
              onClick={handleRemoveCharacter}
              as={Button}
              danger
              type="text"
              shape="circle"
            />
          </StyledActions>
        </StyledContent>
      </Skeleton>
    </Card>
  );
}

export { CharacterCard };
