import { CharacterCard } from '../../Card';
import { SearchList } from './style';
import data from '@/utils/mockData.json';

export function List() {
  const list = data.results;
  console.log(list);
  return (
    <SearchList>
      <CharacterCard />
    </SearchList>
  );
}
