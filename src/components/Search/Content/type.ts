interface SearchProps {
  list?: any;
  loading: boolean;
}

interface LocationProps {
  id: string | null;
  name: string;
  dimension: string | null;
}

interface CharacterProps {
  id: string;
  name: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  created: string;
  location: LocationProps;
  status?: 'Dead' | 'Alive' | 'unknown' | string;
}
interface CardProps {
  character?: CharacterProps;
  loading?: boolean;
}

export type { CardProps, LocationProps, SearchProps, CharacterProps };
