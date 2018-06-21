import { Action, Reducer } from "redux";

export type PartialReducer<T> = (state: T, action: Action) => T;

const createReducer = <T>(
  initialState: T,
  handlers: { [type: string]: PartialReducer<T> }
): Reducer<T> => {
  return (state = initialState, action: Action): T => {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
};

export default createReducer;
