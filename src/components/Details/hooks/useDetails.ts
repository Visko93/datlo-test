import { END_POINT } from '@/api';
import { characterQuery } from '@/api/Details/queries';
import { Character } from '@/gql/graphql';
import { useQuery } from '@tanstack/react-query';
import { request } from 'graphql-request';

export function useDetails(id: string) {
  const { data, error, isLoading } = useQuery<Character>({
    queryKey: ['character'],
    queryFn: async () => request(END_POINT, characterQuery, { id: parseInt(id) })
  });

  return {
    loading: isLoading,
    error,
    data
  };
}
