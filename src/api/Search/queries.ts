import { gql } from 'graphql-request';

export const charactersQuery = gql`
  query CharactersQuery($page: Int!, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        location {
          name
        }
        image
      }
    }
  }
`;
