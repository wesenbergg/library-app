import React from "react";
import { useHistory } from "react-router";

export default function useLogout() {
  const history = useHistory();

  return React.useCallback(() => {
    localStorage.removeItem("bookzillaUser");
    history.push("/login");
  }, [history]);
}
