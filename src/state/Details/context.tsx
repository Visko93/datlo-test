import * as React from 'react';
import { initialState, reducer as DetailsReducer, DetailsState } from './reducer';
import type { DetailsActions } from './selectors';

const DetailsContext = React.createContext<{
  state: DetailsState;
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
