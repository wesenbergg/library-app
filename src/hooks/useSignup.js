import { gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router";

const SIGNUP = gql`
  mutation CreateUserMutation(
    $createUserUsername: String!
    $createUserFavoriteGenre: String!
  ) {
    createUser(
      username: $createUserUsername
      favoriteGenre: $createUserFavoriteGenre
    ) {
      favoriteGenre
      username
      id
    }
  }
`;

export default function useSignup() {
  const history = useHistory();

  return useMutation(SIGNUP, {
    onError: (error) => {
      console.log("error ", error);
    },
    onCompleted: () => {
      console.log("signup");
      history.push("/login");
    },
  });
}
