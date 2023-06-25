import request from 'graphql-request';
import { END_POINT } from '..';
import { characterQuery } from './queries';

export const fetchCharacter = async (id: string) => {
  return request(END_POINT, characterQuery, {
    id: parseInt(id)
  });
};
