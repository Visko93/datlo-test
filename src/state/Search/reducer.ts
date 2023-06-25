import { Characters } from '@/gql/graphql';
import {
  BLACKLIST_CHARACTER,
  BLACKLIST_CHARACTER_LOADING,
  BLACKLIST_CHARACTER_REMOVE,
  CHANGE_PAGE,
  CHANGE_SEARCH,
  GET_CHARACTERS_LIST,
  GET_CHARACTERS_LIST_LOADING,
  NEXT_PAGE
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
      debugger;
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          blackListed:
            state.data.blackListed.length === 0
              ? [action.payload]
              : [...state.data.blackListed, action.payload]
        }
      };
    case BLACKLIST_CHARACTER_LOADING:
      return {
        ...state,
        loading: true
      };
    case BLACKLIST_CHARACTER_REMOVE:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          blackListed: state.data.blackListed.filter((id) => id !== action.payload)
        }
      };
    case CHANGE_PAGE:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          page: action.payload
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
