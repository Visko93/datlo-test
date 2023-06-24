import * as React from 'react';
import { CharacterCard } from '../../Card';
import { SearchList } from './style';
import { ListProps } from './type';
import { Drawer } from '@/components/Details/Drawer';

export function List({ list }: ListProps) {
  const [id, setId] = React.useState('');

  const handleDetails = (id: string) => {
    setId(id);
  };
  return (
    <SearchList>
      {list.map((item, index) => {
        return (
          <CharacterCard
            key={index}
            character={item}
            loading={false}
            onClick={handleDetails}
          />
        );
      })}
      <Drawer characterId={id} />
    </SearchList>
  );
}
