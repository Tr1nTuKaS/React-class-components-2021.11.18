import classes from "./User.module.css";
import { Component } from "react";

class User extends Component {
  componentWillUnmount() {
    console.log(`User ${this.props.name} is Fading away`);
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User1 = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
