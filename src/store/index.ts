import "babel-polyfill";
import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware, { END } from "redux-saga";
import { all } from "redux-saga/effects";

// reducer
import userReducer from "./reducers/user";

// sagas
import userSagas from "./sagas/user";

export function* sagas() {
  yield all([...userSagas]);
}

const rootReducer = combineReducers({
  userReducer
});

export default function configureStore(intialState?: any): any {
  const sagaMiddleware = createSagaMiddleware();
  const store: any = createStore(
    rootReducer,
    intialState,
    applyMiddleware(sagaMiddleware)
  );
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
}
