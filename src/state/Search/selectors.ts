import { Characters } from '@/gql/graphql';
import {
  GET_CHARACTERS_LIST,
  GET_CHARACTERS_LIST_ERROR,
  GET_CHARACTERS_LIST_LOADING,
  GET_CHARACTERS_LIST_SEARCH,
  GET_CHARACTERS_LIST_SEARCH_ERROR
} from './actions';

export const getCharactersList = (list: Characters) => ({
  type: GET_CHARACTERS_LIST,
  payload: list
});

export const getCharactersListLoading = () => ({
  type: GET_CHARACTERS_LIST_LOADING
});

export const getCharactersListError = () => ({
  type: GET_CHARACTERS_LIST_ERROR
});

export const getCharactersListSearch = (list: Characters) => ({
  type: GET_CHARACTERS_LIST_SEARCH,
  payload: list
});

export const getCharactersListSearchError = () => ({
  type: GET_CHARACTERS_LIST_SEARCH_ERROR
});

export type SearchActions =
  | ReturnType<typeof getCharactersList>
  | ReturnType<typeof getCharactersListLoading>
  | ReturnType<typeof getCharactersListError>
  | ReturnType<typeof getCharactersListSearch>
  | ReturnType<typeof getCharactersListSearchError>;
