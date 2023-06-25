import * as React from 'react';
import { CharacterCard } from '../../Card';
import { SearchList } from './style';
import { ListProps } from './type';
import { Drawer } from '@/components/Details/Drawer';
import { useDetails } from '@/state/Details';
import { useDrawer } from '@/components/Details/hooks';

export function List({ list }: ListProps) {
  const { state } = useDetails();
  const { closeDrawer, openDrawer } = useDrawer();

  return (
    <>
      <SearchList>
        {list.map((item, index) => {
          return <CharacterCard key={index} character={item} loading={false} />;
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
