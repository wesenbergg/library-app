import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const ALL_USERS = gql`
  query Query {
    allUsers {
      username
    }
  }
`;

const useFetchUsers = () => {
  return useQuery(ALL_USERS);
};

export default useFetchUsers;
