import * as React from 'react';
import { CharacterCard } from '../../Card';
import { SearchList } from './style';
import { ListProps } from './type';
import { Drawer } from '@/components/Details/Drawer';
import { useDetails } from '@/state/Details';
import { useDrawer } from '@/components/Details/hooks';
import { Character, Maybe } from '@/gql/graphql';
import { useSearch } from '@/state/Search';

export function List({ list }: { list: ListProps }) {
  const { state: detailsState } = useDetails();
  const { state: searchState } = useSearch();
  const { closeDrawer, openDrawer } = useDrawer();

  if (!list) return null;
  return (
    <>
      <SearchList>
        {list.map((item, index) => {
          if (searchState.data.blackListed.includes(item!.id!)) return null;
          return <CharacterCard key={index} character={item as Character} />;
        })}
      </SearchList>
      <Drawer
        characterId={detailsState.data?.selected!}
        open={detailsState.data?.open}
        onClose={closeDrawer}
        onOpen={openDrawer}
      />
    </>
  );
}
