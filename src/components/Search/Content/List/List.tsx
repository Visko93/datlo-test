import { CharacterCard } from '../../Card';
import { SearchList } from './style';
import data from '@/utils/mockData.json';

export function List() {
  const list = data.results;
  return (
    <SearchList>
      {list.map((item, index) => {
        return <CharacterCard key={index} character={item} loading={false} />;
      })}
    </SearchList>
  );
}
