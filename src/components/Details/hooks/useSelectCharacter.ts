import * as React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Character } from '@/gql/graphql';

import { fetchCharacter } from '@/api/Details';
import {
  useDetails,
  GET_CHARACTER_DETAILS_SUCCESS,
  GET_CHARACTER_DETAILS_LOADING
} from '@/state/Details';

export function useSelectCharacter(id: string) {
  const { dispatch } = useDetails();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['character', id],
    queryFn: async () => {
      if (id) {
        return await fetchCharacter(id);
      }
      return null; // or any appropriate default value when characterId is not available
    },
    enabled: !!id
  });
  React.useEffect(() => {
    if (!dispatch) return;
    if (isLoading) {
      dispatch({
        type: GET_CHARACTER_DETAILS_LOADING
      });
    }
  }, [isLoading, id]);

  React.useEffect(() => {
    if (!dispatch) return;
    // @ts-ignore
    else if (data && data.character) {
      dispatch({
        type: GET_CHARACTER_DETAILS_SUCCESS,
        // @ts-ignore
        payload: data.character as Character
      });
    }
  }, [id]);

  return {
    data,
    isLoading,
    isError
  };
}
