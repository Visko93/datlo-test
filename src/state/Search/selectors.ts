import { Characters } from '@/gql/graphql';
import {
  GET_CHARACTERS_LIST,
  GET_CHARACTERS_LIST_ERROR,
  GET_CHARACTERS_LIST_LOADING,
  BLACKLIST_CHARACTER,
  BLACKLIST_CHARACTER_LOADING,
  BLACKLIST_CHARACTER_REMOVE,
  CHANGE_PAGE
} from './actions';

export const getCharactersList = ({
  info,
  results
}: {
  info: Pick<Characters, 'info'>;
  results: Pick<Characters, 'results'>;
}) => ({
  type: GET_CHARACTERS_LIST,
  payload: { info, results }
});

export const getCharactersListLoading = () => ({
  type: GET_CHARACTERS_LIST_LOADING
});

export const getCharactersListError = () => ({
  type: GET_CHARACTERS_LIST_ERROR
});

export const blacklistCharacter = (id: string) => ({
  type: BLACKLIST_CHARACTER,
  payload: id as string
});

export const blacklistCharacterLoading = () => ({
  type: BLACKLIST_CHARACTER_LOADING
});

export const blacklistCharacterRemove = (id: string) => ({
  type: BLACKLIST_CHARACTER_REMOVE,
  payload: id as string
});

export const changePage = (page: number) => ({
  type: CHANGE_PAGE,
  payload: page as number
});

export const changeSearch = (search: string) => ({
  type: CHANGE_PAGE,
  payload: search as string
});

export type SearchActions =
  | ReturnType<typeof getCharactersList>
  | ReturnType<typeof getCharactersListLoading>
  | ReturnType<typeof getCharactersListError>
  | ReturnType<typeof blacklistCharacter>
  | ReturnType<typeof blacklistCharacterLoading>
  | ReturnType<typeof blacklistCharacterRemove>
  | ReturnType<typeof changePage>
  | ReturnType<typeof changeSearch>;
