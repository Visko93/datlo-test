import request from 'graphql-request';
import { END_POINT } from '..';
import { characterQuery } from './queries';
import { Character } from '@/gql/graphql';

export const fetchCharacter = async (id: string) => {
  return request<{ character: Character }>(END_POINT, characterQuery, {
    id: parseInt(id)
  });
};
