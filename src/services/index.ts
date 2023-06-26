import { QueryClient } from '@tanstack/react-query';

// Move to .env
export const END_POINT = 'https://rickandmortyapi.com/graphql';
export const queryClient = new QueryClient();
