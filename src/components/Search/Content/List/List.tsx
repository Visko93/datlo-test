import * as React from 'react';
import { Character } from '@/gql/graphql';
import { AnimatePresence } from 'framer-motion';
import { SearchList, animationConfig } from './';
import type { ListProps } from './';
import { Drawer } from '@/components/Details/Drawer';
import { CharacterCard } from '@/components/Search/Card';
import { useDrawer } from '@/components/Details/hooks';
import { useDetails } from '@/state/Details';
import { useSearch } from '@/state/Search';

export function List({ list }: { list: ListProps }) {
  const { state: detailsState } = useDetails();
  const { state: searchState } = useSearch();
  const { closeDrawer, openDrawer } = useDrawer();

  if (!list) return null;
  return (
    <>
      <AnimatePresence>
        <SearchList {...{ animationConfig }}>
          {list.map((item, index) => {
            if (searchState.data.blackListed.includes(item!.id!)) return null;
            return <CharacterCard key={index} character={item as Character} />;
          })}
        </SearchList>
      </AnimatePresence>
      <Drawer
        characterId={detailsState.data?.selected!}
        open={detailsState.data?.open}
        onClose={closeDrawer}
        onOpen={openDrawer}
      />
    </>
  );
}
