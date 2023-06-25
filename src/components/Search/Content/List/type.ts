import { Character, Maybe } from '@/gql/graphql';

type ListProps = Maybe<Maybe<Character>[]> | undefined;

export type { ListProps };
