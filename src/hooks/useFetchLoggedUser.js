import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

export const WHOAMI = gql`
  query Query {
    me {
      username
      favoriteGenre
      id
    }
  }
`;

const useFetchLoggedUser = () => {
  return useQuery(WHOAMI);
};

export default useFetchLoggedUser;
