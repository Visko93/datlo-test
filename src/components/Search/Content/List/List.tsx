import * as React from 'react';
import { CharacterCard } from '../../Card';
import { SearchList } from './style';
import { ListProps } from './type';
import { Drawer } from '@/components/Details/Drawer';
import { useDetails } from '@/state/Details';
import { useDrawer } from '@/components/Details/hooks';
import { Character } from '@/gql/graphql';

export function List({ list }: { list: ListProps }) {
  const { state } = useDetails();
  const { closeDrawer, openDrawer } = useDrawer();

  if (!list) return null;
  return (
    <>
      <SearchList>
        {list.map((item, index) => {
          return <CharacterCard key={index} character={item as Character} />;
        })}
      </SearchList>
      <Drawer
        characterId={state.data?.selected!}
        open={state.data?.open}
        onClose={closeDrawer}
        onOpen={openDrawer}
      />
    </>
  );
}
