import * as React from 'react';
import { Drawer as AntdDrawer } from 'antd';
import {
  AimOutlined,
  ExperimentOutlined,
  FireOutlined,
  GatewayOutlined,
  ManOutlined,
  WomanOutlined
} from '@ant-design/icons';
import { Episode } from '@/gql/graphql';
import { Details } from '@/components/Search/Card/Details';

import { StyledContent, StyledEpisodes, StyledHeader, StyledList } from './style';
import type { DrawerProps } from './type';
import { useSelectCharacter } from '../hooks/useSelectCharacter';
import { useDetails } from '@/state/Details';
import { Loading } from '@/components/Search/Content/Loading';

function Drawer({ open, characterId, onClose }: DrawerProps) {
  if (!characterId) return null;
  const { state } = useDetails();
  const isOpen = state.data?.open;
  const { data, isLoading } = useSelectCharacter(characterId);
  const character = data?.character;

  const content = () => {
    if (isLoading) return <Loading />;
    return (
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {' '}
            <StyledHeader backgroundImage={character?.image!}>
              <h2>{character?.name}</h2>
              <div>
                <FireOutlined
                  style={{
                    color: character?.status === 'Alive' ? 'green' : 'red',
                    fontSize: '1.5em'
                  }}
                />
                <h3>{character?.status}</h3>
              </div>
            </StyledHeader>
            <StyledContent>
              <Details
                style={{
                  marginBottom: '1em'
                }}
                text={character?.location!.name || 'Not Found'}
                icon={
                  <AimOutlined
                    style={{
                      fontSize: '1.5em'
                    }}
                  />
                }
              />
              <Details
                style={{
                  marginBottom: '1em'
                }}
                text={character?.species!}
                icon={
                  <ExperimentOutlined
                    style={{
                      fontSize: '1.5em'
                    }}
                  />
                }
              />
              <Details
                style={{
                  marginBottom: '1em'
                }}
                text={character?.location!.dimension!}
                icon={
                  <GatewayOutlined
                    style={{
                      fontSize: '1.5em'
                    }}
                  />
                }
              />
              <Details
                style={{
                  marginBottom: '1em'
                }}
                text={character?.gender!}
                icon={
                  character?.gender === 'Male' ? (
                    <ManOutlined
                      style={{
                        fontSize: '1.5em'
                      }}
                    />
                  ) : (
                    <WomanOutlined
                      style={{
                        fontSize: '1.5em'
                      }}
                    />
                  )
                }
              />
            </StyledContent>
            <StyledEpisodes>
              <h3>Episodes</h3>
              {character?.episode && (
                <StyledList
                  dataSource={character?.episode as Episode[]}
                  pagination={{
                    position: 'bottom',
                    align: 'center',
                    pageSize: 5,
                    showSizeChanger: false,
                    showLessItems: true
                  }}
                  // @ts-ignore
                  renderItem={(item: Episode) => (
                    <StyledList.Item key={item.id}>
                      <StyledList.Item.Meta
                        title={
                          <a
                            href={`https://www.google.com/search?q="Rick+Morty"+"${
                              item!.name
                            }"`}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {item!.name}
                          </a>
                        }
                        description={item!.air_date}
                      />
                    </StyledList.Item>
                  )}
                />
              )}
            </StyledEpisodes>
          </>
        )}
      </>
    );
  };

  return (
    <AntdDrawer
      placement={'right'}
      width={500}
      onClose={onClose}
      open={isOpen}
      getContainer={false}
      height={'100%'}
      style={{
        backgroundImage: `url(/assets/background.jpg)`,
        backgroundPosition: 'top center'
      }}
      bodyStyle={{
        padding: 0
      }}
      headerStyle={{
        display: 'none'
      }}
    >
      {content()}
    </AntdDrawer>
  );
}

export { Drawer };
