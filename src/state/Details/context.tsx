import * as React from 'react';
import { initialState, reducer as DetailsReducer, DataState } from './reducer';
import type { Character } from '@/gql/graphql';
import type { DetailsActions } from './selectors';

type DetailsContextType = {
  loading: boolean;
  error: Error | null;
  data: DataState | null;
};

const DetailsContext = React.createContext<{
  state: DetailsContextType;
  dispatch?: React.Dispatch<DetailsActions>;
}>({
  state: initialState
});
DetailsContext.displayName = 'DetailsContext';

function DetailsProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(DetailsReducer, initialState);

  const value = {
    state,
    dispatch
  };

  return <DetailsContext.Provider value={value}>{children}</DetailsContext.Provider>;
}

function useDetails() {
  const context = React.useContext(DetailsContext);
  if (context === undefined) {
    throw new Error('useDetails must be used within a DetailsProvider');
  }
  return context;
}

export { DetailsProvider, useDetails };
