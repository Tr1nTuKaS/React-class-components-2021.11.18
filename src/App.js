import UserFinder from "./components/UserFinder";
import UsersContext from "./store/UsersContext";

const DUMMY_USERS = [
  { id: "u1", name: "James" },
  { id: "u2", name: "Mike" },
  { id: "u3", name: "Jane" },
  { id: "u4", name: "Michel" },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS,
    test: test,
    mainColor: "Tomato",
  };

  function test(val) {
    console.log("test app.js", val);
  }

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
