import { gql } from 'graphql-request';

export const characterQuery = gql`
  query CharacterQuery($id: ID!) {
    character(id: $id) {
      name
      status
      species
      type
      gender
      image
      location {
        name
        dimension
      }
      episode {
        id
        name
        air_date
      }
    }
  }
`;
