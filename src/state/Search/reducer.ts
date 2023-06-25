import { Characters } from '@/gql/graphql';
import { GET_CHARACTERS_LIST } from './actions';
import type { SearchActions } from './selectors';

export interface DataState {
  list: Characters | null;
  blackListed: string[];
  search: string | null;
}

export interface SearchState {
  data: DataState;
  loading: boolean;
  error: Error | null;
}

export const initialState: SearchState = {
  data: {
    list: null,
    blackListed: [],
    search: null
  },
  loading: false,
  error: null
};

export function reducer(state = initialState, action: SearchActions): SearchState {
  switch (action.type) {
    case GET_CHARACTERS_LIST:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          list: action.payload
        }
      };

    default:
      return state;
  }
}
