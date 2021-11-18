// create context
import { createContext } from "react";

const UsersContext = createContext({
  users: [],
});

UsersContext.displayName = "UsersContext";

export default UsersContext;
