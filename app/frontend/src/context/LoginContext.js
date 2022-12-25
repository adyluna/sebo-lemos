import { createContext } from "react";

const LoginContext = createContext({
  logged: false,
  setLogged: (value) => {}
});

export default LoginContext;