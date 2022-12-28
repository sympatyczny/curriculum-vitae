import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import { createStore, Dispatch } from 'redux';

export const store = createStore(rootReducer, composeWithDevTools())

export const dispatch: Dispatch = (action: any) => {
	return store.dispatch(action);
};

export default store;
