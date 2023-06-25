import * as React from 'react';
import { useQuery } from '@tanstack/react-query';
import { FetchCharactersListProps, fetchCharactersList } from '@/api/Search';
import {
  GET_CHARACTERS_LIST,
  GET_CHARACTERS_LIST_LOADING,
  useSearch
} from '@/state/Search';
import { Characters } from '@/gql/graphql';

export function useSearchInitial({ page = 1 }: FetchCharactersListProps) {
  const { dispatch } = useSearch();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['character', page],
    queryFn: () => {
      return fetchCharactersList({ page });
    }
  });

  // Loading start
  // If initial Load Populate the current list state
  // If list state is not empty, replace the current list state with the new list state
  // update the pagination state
  // Loading end

  React.useEffect(() => {
    if (!dispatch) return;
    else if (data) {
      dispatch({
        type: GET_CHARACTERS_LIST,
        payload: data.results as Characters
      });
    }
  }, []);

  return { data, isLoading, isError };
}
