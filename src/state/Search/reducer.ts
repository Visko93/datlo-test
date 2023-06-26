import { Characters } from '@/gql/graphql';
import {
  BLACKLIST_CHARACTER,
  BLACKLIST_CHARACTER_CLEAR,
  CHANGE_SEARCH,
  GET_CHARACTERS_LIST,
  GET_CHARACTERS_LIST_LOADING
} from './actions';
import type { SearchActions } from './selectors';

export interface DataState {
  list: Characters | null;
  blackListed: string[];
  search: string | null;
  page: number;
}

export interface SearchState {
  data: DataState;
  loading: boolean;
  removing: boolean;
  error: Error | null;
}

export const initialState: SearchState = {
  data: {
    list: null,
    blackListed: [],
    search: null,
    page: 1
  },
  loading: false,
  removing: false,
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
    case GET_CHARACTERS_LIST_LOADING:
      return {
        ...state,
        loading: true
      };
    case BLACKLIST_CHARACTER:
      const { blackListed } = state.data;
      if (blackListed.includes(action.payload)) return state;
      const newList = [...blackListed];
      newList.push(action.payload);
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          blackListed: newList
        }
      };
    case BLACKLIST_CHARACTER_CLEAR:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          blackListed: []
        }
      };
    case CHANGE_SEARCH: {
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          search: action.payload
        }
      };
    }
    default:
      return state;
  }
}
