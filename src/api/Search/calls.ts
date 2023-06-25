import request from 'graphql-request';
import { END_POINT } from '..';
import { charactersQuery } from './queries';
import { Characters } from '@/gql/graphql';

export type FetchCharactersListProps = {
  page: number;
  search?: string;
};

export const fetchCharactersList = async ({ page, search }: FetchCharactersListProps) =>
  request<Characters>(END_POINT, charactersQuery, {
    page,
    name: search || ''
  });
