import { Characters } from '@/gql/graphql';
import { GET_CHARACTERS_LIST } from './actions';

export const getCharactersList = (list: Characters) => ({
  type: GET_CHARACTERS_LIST,
  payload: list
});

export type SearchActions = ReturnType<typeof getCharactersList>;
