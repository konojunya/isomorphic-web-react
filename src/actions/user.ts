import { AxiosResponse } from "axios";
import { Action } from "redux";
import { User } from "../api/interface/response";

export const ActionTypes = {
  // get brands
  REQUEST_GET_USERS: "BRAND/REQUEST_GET_USERS",
  SUCCESS_GET_USERS: "BRAND/SUCCESS_GET_USERS",
  FAILURE_GET_USERS: "BRAND/FAILURE_GET_USERS"
};

/**
 * ブランド一覧
 */
export interface RequestGetUsers extends Action {
  type: string;
}
export const requestGetUsers = (): RequestGetUsers => ({
  type: ActionTypes.REQUEST_GET_USERS
});
export interface SuccessGetUsers extends Action {
  type: string;
  payload: User[];
}
export const successGetUsers = (payload: User[]): SuccessGetUsers => ({
  type: ActionTypes.SUCCESS_GET_USERS,
  payload
});
export interface FailureGetUsers extends Action {
  type: string;
  error: {
    response: AxiosResponse;
  };
}
export const failureGetUsers = (error: any): FailureGetUsers => ({
  type: ActionTypes.FAILURE_GET_USERS,
  error
});