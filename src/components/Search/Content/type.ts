import { Character } from '@/gql/graphql';

interface SearchProps {
  list?: any;
  loading: boolean;
}

interface CardProps {
  character?: Character;
  loading?: boolean;
}

export type { CardProps, SearchProps };
