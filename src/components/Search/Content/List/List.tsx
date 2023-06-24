import { CharacterCard } from '../../Card';
import { SearchList } from './style';
import { ListProps } from './type';

export function List({ list }: ListProps) {
  return (
    <SearchList>
      {list.map((item, index) => {
        return <CharacterCard key={index} character={item} loading={false} />;
      })}
    </SearchList>
  );
}
