import * as React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCharactersList } from '@/services/Search';
import {
  GET_CHARACTERS_LIST,
  GET_CHARACTERS_LIST_LOADING,
  useSearch
} from '@/state/Search';
import { queryClient } from '@/services';

export function useSearchCharacter() {
  const [page, setPage] = React.useState(1);
  const { dispatch, state } = useSearch();
  const {
    data: { search }
  } = state;
  const { data, isLoading, isError, isFetching, isPreviousData } = useQuery({
    queryKey: ['character', page, search],
    queryFn: async () => {
      try {
        dispatch && dispatch({ type: GET_CHARACTERS_LIST_LOADING });
        return await fetchCharactersList({ page, search });
      } catch (err) {
        throw new Error('Error: ', { cause: err });
      }
    }
  });

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  React.useEffect(() => {
    if (!isPreviousData && data?.hasMore) {
      queryClient.prefetchQuery({
        queryKey: ['character', page + 1],
        queryFn: () => fetchCharactersList({ page: page + 1, search })
      });
    }
  }, [data, isPreviousData, page, queryClient]);

  React.useEffect(() => {
    if (!dispatch) return;
    else if (data?.characters) {
      dispatch({
        type: GET_CHARACTERS_LIST,
        payload: data?.characters
      });
    }
  }, [isFetching]);

  return { isLoading, isError, page, handlePageChange };
}
