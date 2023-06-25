import * as React from 'react';
import { List, Drawer as AntdDrawer } from 'antd';
import {
  AimOutlined,
  ExperimentOutlined,
  FireOutlined,
  GatewayOutlined,
  ManOutlined,
  WomanOutlined
} from '@ant-design/icons';
import { Character, Episode } from '@/gql/graphql';
import { Details } from '@/components/Search/Card/Details';

import { StyledContent, StyledEpisodes, StyledHeader } from './style';
import type { DrawerProps } from './type';
import { useSelectCharacter } from '../hooks/useSelectCharacter';
import { useDetails } from '@/state/Details';
import { Loading } from '@/components/Search/Content/Loading';
import { NotFound } from '@/components/Search/Content/NotFound';

const mock = {
  character: {
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    location: {
      name: 'Citadel of Ricks',
      dimension: 'unknown'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    episode: [
      {
        id: '1',
        name: 'Pilot',
        air_date: 'December 2, 2013'
      },
      {
        id: '2',
        name: 'Lawnmower Dog',
        air_date: 'December 9, 2013'
      },
      {
        id: '3',
        name: 'Anatomy Park',
        air_date: 'December 16, 2013'
      },
      {
        id: '4',
        name: 'M. Night Shaym-Aliens!',
        air_date: 'January 13, 2014'
      },
      {
        id: '5',
        name: 'Meeseeks and Destroy',
        air_date: 'January 20, 2014'
      },
      {
        id: '6',
        name: 'Rick Potion #9',
        air_date: 'January 27, 2014'
      },
      {
        id: '7',
        name: 'Raising Gazorpazorp',
        air_date: 'March 10, 2014'
      },
      {
        id: '8',
        name: 'Rixty Minutes',
        air_date: 'March 17, 2014'
      },
      {
        id: '9',
        name: 'Something Ricked This Way Comes',
        air_date: 'March 24, 2014'
      },
      {
        id: '10',
        name: 'Close Rick-counters of the Rick Kind',
        air_date: 'April 7, 2014'
      },
      {
        id: '11',
        name: 'Ricksy Business',
        air_date: 'April 14, 2014'
      },
      {
        id: '12',
        name: 'A Rickle in Time',
        air_date: 'July 26, 2015'
      },
      {
        id: '13',
        name: 'Mortynight Run',
        air_date: 'August 2, 2015'
      },
      {
        id: '14',
        name: 'Auto Erotic Assimilation',
        air_date: 'August 9, 2015'
      },
      {
        id: '15',
        name: 'Total Rickall',
        air_date: 'August 16, 2015'
      },
      {
        id: '16',
        name: 'Get Schwifty',
        air_date: 'August 23, 2015'
      },
      {
        id: '17',
        name: 'The Ricks Must Be Crazy',
        air_date: 'August 30, 2015'
      },
      {
        id: '18',
        name: 'Big Trouble in Little Sanchez',
        air_date: 'September 13, 2015'
      },
      {
        id: '19',
        name: 'Interdimensional Cable 2: Tempting Fate',
        air_date: 'September 20, 2015'
      },
      {
        id: '20',
        name: "Look Who's Purging Now",
        air_date: 'September 27, 2015'
      },
      {
        id: '21',
        name: 'The Wedding Squanchers',
        air_date: 'October 4, 2015'
      },
      {
        id: '22',
        name: 'The Rickshank Rickdemption',
        air_date: 'April 1, 2017'
      },
      {
        id: '23',
        name: 'Rickmancing the Stone',
        air_date: 'July 30, 2017'
      },
      {
        id: '24',
        name: 'Pickle Rick',
        air_date: 'August 6, 2017'
      },
      {
        id: '25',
        name: 'Vindicators 3: The Return of Worldender',
        air_date: 'August 13, 2017'
      },
      {
        id: '26',
        name: 'The Whirly Dirly Conspiracy',
        air_date: 'August 20, 2017'
      },
      {
        id: '27',
        name: 'Rest and Ricklaxation',
        air_date: 'August 27, 2017'
      },
      {
        id: '28',
        name: 'The Ricklantis Mixup',
        air_date: 'September 10, 2017'
      },
      {
        id: '29',
        name: "Morty's Mind Blowers",
        air_date: 'September 17, 2017'
      },
      {
        id: '30',
        name: "The ABC's of Beth",
        air_date: 'September 24, 2017'
      },
      {
        id: '31',
        name: 'The Rickchurian Mortydate',
        air_date: 'October 1, 2017'
      },
      {
        id: '32',
        name: 'Edge of Tomorty: Rick, Die, Rickpeat',
        air_date: 'November 10, 2019'
      }
    ]
  }
};

function Drawer({ open, characterId, onClose }: DrawerProps) {
  if (!characterId) return null;
  const { state } = useDetails();
  const isOpen = state.data?.open;

  const { data, isError, isLoading } = useSelectCharacter(characterId);
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
                <List
                  dataSource={character?.episode as Episode[]}
                  pagination={{
                    position: 'bottom',
                    align: 'center',
                    pageSize: 5,
                    showSizeChanger: false,
                    showLessItems: true
                  }}
                  renderItem={(item: Episode) => (
                    <List.Item key={item.id}>
                      <List.Item.Meta
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
                    </List.Item>
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
    >
      {content()}
    </AntdDrawer>
  );
}

export { Drawer };
