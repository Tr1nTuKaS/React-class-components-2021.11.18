import css from "./UserFinder.module.css";
import { useState, useEffect, Component } from "react";
import Users from "./Users";
import UsersContext from "../store/UsersContext";

class UserFinder extends Component {
  // 1 to use users context
  static contextType = UsersContext;
  constructor(props) {
    super(props);
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    // 2 use context values
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    // if searchTerm changed i will update
    if (prevState.searchTerm !== this.state.searchTerm) {
      const filteredArr = this.context.users.filter((userObj) =>
        userObj.name.includes(this.state.searchTerm)
      );
      this.setState({ filteredUsers: filteredArr });
    }
    // infinite loop
  }

  // mehods
  searchChangeHandler = (e) => {
    this.setState({ searchTerm: e.target.value });
    this.context.test(e.target.value);
  };

  render() {
    return (
      <>
        <div className={css.finder}>
          <UsersContext.Consumer>
            {(value) => (
              <h1 style={{ color: value.mainColor }}>
                MainColor: {value.mainColor}
              </h1>
            )}
          </UsersContext.Consumer>
          <input
            type="search"
            value={this.state.searchTerm}
            onChange={this.searchChangeHandler}
          />
          {this.state.searchTerm && (
            <h3>You have searched for: "{this.state.searchTerm}"</h3>
          )}
        </div>
        <Users users={this.state.filteredUsers} />
      </>
    );
  }
}
// CLASS END

// function UserFinder1() {
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   const searchChangeHandler = (e) => {
//     setSearchTerm(e.target.value);
//   };
//   // componentDidMount = useEffect(() => {}, [])
//   useEffect(() => {
//     setFilteredUsers(DUMMY_USERS);
//     // componentWillUnmount()
//     return () => console.log('clenup');
//   }, []);

//   // componentDidUpdate - class based
//   useEffect(() => {
//     console.log('searchTerm updated', searchTerm);
//     const filteredArr = DUMMY_USERS.filter((userObj) =>
//       userObj.name.includes(searchTerm)
//     );
//     setFilteredUsers(filteredArr);
//   }, [searchTerm]);

//   return (
//     <>
//       <div className={css.finder}>
//         <input
//           type='search'
//           value={searchTerm}
//           onChange={searchChangeHandler}
//         />
//       </div>
//       <Users users={filteredUsers} />
//     </>
//   );
// }

export default UserFinder;
