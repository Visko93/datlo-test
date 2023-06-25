import * as React from 'react';
import {
  initialState,
  reducer as SearchReducer,
  DataState,
  SearchState
} from './reducer';
import type { SearchActions } from './selectors';

const SearchContext = React.createContext<{
  state: SearchState;
  dispatch?: React.Dispatch<SearchActions>;
}>({
  state: initialState
});
SearchContext.displayName = 'SearchContext';

function SearchProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(SearchReducer, initialState);

  const value = {
    state,
    dispatch
  };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}

function useSearch() {
  const context = React.useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}

export { SearchProvider, useSearch };
