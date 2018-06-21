import * as React from "react"
import { requestGetUsers } from "../../../actions/user";
import { provideHooks } from "redial";
import { connect } from "react-redux";
import { User } from "../../../api/interface/response";

class ActionDispatcher {
  constructor(private dispatch: (action: any) => void) {}
  public getUsers() {
    this.dispatch(requestGetUsers())
  }
}

interface Props {
  userReducer: any;
  actions: ActionDispatcher;
}

@provideHooks({
  fetch: ({ dispatch }) => dispatch(requestGetUsers())
})
class Users extends React.Component<Props> {

  render() {
    const { errorStatus } = this.props.userReducer
    if(errorStatus) {
      return <h1>Error: {errorStatus}</h1>
    }

    const { users, isFetching } = this.props.userReducer
    if(isFetching) {
      return <h1>loading...</h1>
    }

    if(users.length <= 0) {
      return <p>not found...</p>
    }

    return users.map((user: User, index: number) => (
      <div key={`users-${index}`}>
        <p>name: {user.name}</p>
        <p>@{user.username}</p>
        <a href={user.website}>{user.website}</a>
      </div>
    ))
  }
}

export default connect(
  (state: any) => ({ userReducer: state.userReducer }),
  (dispatch: any) => ({ actions: new ActionDispatcher(dispatch) })
)(Users)