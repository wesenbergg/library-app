import { gql, useMutation, useQuery } from "@apollo/client";
import { useHistory } from "react-router";
import { WHOAMI } from "./useFetchLoggedUser";

const LOGIN = gql`
  mutation Mutation($loginUsername: String!, $loginPassword: String!) {
    login(username: $loginUsername, password: $loginPassword) {
      value
    }
  }
`;

export default function useLogin() {
  const history = useHistory();

  const { refetch } = useQuery(WHOAMI, {
    notifyOnNetworkStatusChange: true,
  });

  return useMutation(LOGIN, {
    onError: (error) => {
      console.log("error ", error);
    },
    onCompleted: ({ login }) => {
      localStorage.setItem("bookzillaUser", `bearer ${login.value}`);
      refetch();
      history.push("/home");
    },
  });
}
