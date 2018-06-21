import * as Actions from "../../actions/user";
import { User } from "../../api/interface/response";
import createReducer from "../../lib/CreateReducer";

interface UserInitState {
  isFetching: boolean;
  errorStatus: number | null;
  users: User[];
}

const initialState: UserInitState = {
  isFetching: false,
  errorStatus: null,
  users: []
};

/**
 * ブランド一覧取得
 */
const requestGetUsers = (state: UserInitState): UserInitState => {
  return {
    ...state,
    isFetching: true
  };
};
const successGetUsers = (
  state: UserInitState,
  action: Actions.SuccessGetUsers
): UserInitState => {
  return {
    ...state,
    isFetching: false,
    users: action.payload,
    errorStatus: null
  };
};
const failureGetUsers = (
  state: UserInitState,
  action: Actions.FailureGetUsers
): UserInitState => {
  return {
    ...state,
    isFetching: false,
    errorStatus: action.error.response.status
  };
};

export default createReducer<UserInitState>(initialState, {
  [Actions.ActionTypes.REQUEST_GET_USERS]: requestGetUsers,
  [Actions.ActionTypes.SUCCESS_GET_USERS]: successGetUsers,
  [Actions.ActionTypes.FAILURE_GET_USERS]: failureGetUsers
});
