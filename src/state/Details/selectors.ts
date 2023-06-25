import {
  CLEAR_CHARACTER_DETAILS,
  GET_CHARACTER_DETAILS,
  GET_CHARACTER_DETAILS_ERROR,
  GET_CHARACTER_DETAILS_LOADING,
  GET_CHARACTER_DETAILS_SUCCESS
} from './actions';
import type { Character } from '@/gql/graphql';

export const getCharacterDetails = (id: string) => ({
  type: GET_CHARACTER_DETAILS,
  payload: id
});

export const getCharacterDetailsSuccess = (data: Character) => ({
  type: GET_CHARACTER_DETAILS_SUCCESS,
  payload: data
});

export const getCharacterDetailsError = (error: Error) => ({
  type: GET_CHARACTER_DETAILS_ERROR,
  payload: error
});

export const getCharacterDetailsLoading = () => ({
  type: GET_CHARACTER_DETAILS_LOADING
});

export const selectCharacter = () => ({
  type: CLEAR_CHARACTER_DETAILS
});

export const openCharacterDetails = () => ({
  type: CLEAR_CHARACTER_DETAILS
});

export const closeCharacterDetails = () => ({
  type: CLEAR_CHARACTER_DETAILS
});

export const getSelectCharacter = (id: string) => ({
  type: CLEAR_CHARACTER_DETAILS,
  payload: id
});

export type DetailsActions =
  | ReturnType<typeof getCharacterDetails>
  | ReturnType<typeof getCharacterDetailsSuccess>
  | ReturnType<typeof getCharacterDetailsError>
  | ReturnType<typeof getCharacterDetailsLoading>
  | ReturnType<typeof selectCharacter>
  | ReturnType<typeof openCharacterDetails>
  | ReturnType<typeof closeCharacterDetails>
  | ReturnType<typeof getSelectCharacter>;
