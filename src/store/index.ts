import { createStore, combineReducers } from 'redux';
import userReducer from './actions/userActions';



const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export default store;