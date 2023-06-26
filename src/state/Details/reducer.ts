import {
  CLEAR_CHARACTER_DETAILS,
  GET_CHARACTER_DETAILS_SUCCESS,
  OPEN_CHARACTER_DETAILS,
  CLOSE_CHARACTER_DETAILS,
  GET_SELECT_CHARACTER
} from './actions';
import type { Character } from '@/gql/graphql';
import type { DetailsActions } from './selectors';

export interface DataState {
  character: Character | null;
  open: boolean;
  selected: string | null;
}

export interface DetailsState {
  data: DataState;
  loading: boolean;
  error: Error | null;
}

export const initialState: DetailsState = {
  data: {
    character: null,
    open: false,
    selected: null
  },
  loading: false,
  error: null
};

export function reducer(state = initialState, action: DetailsActions): DetailsState {
  switch (action.type) {
    case GET_CHARACTER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          // @ts-ignore
          character: action.payload
        }
      };
    case GET_SELECT_CHARACTER:
      return {
        ...state,
        data: {
          ...state.data,
          // @ts-ignore
          selected: action.payload
        }
      };
    case CLEAR_CHARACTER_DETAILS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          character: null
        },
        error: null
      };
    case OPEN_CHARACTER_DETAILS:
      return {
        ...state,
        data: {
          ...state.data,
          open: true
        }
      };
    case CLOSE_CHARACTER_DETAILS:
      return {
        ...state,
        data: {
          ...state.data,
          open: false
        }
      };
    default:
      return state;
  }
}
