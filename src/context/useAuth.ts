import { useContext } from "react";
import AuthContext from "./authContex";

const useAuth = () => {
  const data = useContext(AuthContext);
  return data;
};

export default useAuth;
