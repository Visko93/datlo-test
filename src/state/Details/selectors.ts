import {
  CLEAR_CHARACTER_DETAILS,
  CLOSE_CHARACTER_DETAILS,
  GET_CHARACTER_DETAILS_LOADING,
  GET_SELECT_CHARACTER,
  OPEN_CHARACTER_DETAILS
} from './actions';

export const getCharacterDetailsLoading = () => ({
  type: GET_CHARACTER_DETAILS_LOADING
});

export const selectCharacter = () => ({
  type: CLEAR_CHARACTER_DETAILS
});

export const openCharacterDetails = () => ({
  type: OPEN_CHARACTER_DETAILS
});

export const closeCharacterDetails = () => ({
  type: CLOSE_CHARACTER_DETAILS
});

export const getSelectCharacter = (id: string) => ({
  type: GET_SELECT_CHARACTER,
  payload: id
});

export type DetailsActions =
  | ReturnType<typeof getCharacterDetailsLoading>
  | ReturnType<typeof selectCharacter>
  | ReturnType<typeof openCharacterDetails>
  | ReturnType<typeof closeCharacterDetails>
  | ReturnType<typeof getSelectCharacter>;
