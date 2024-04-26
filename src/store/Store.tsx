// store.ts



import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducer from './Reducers'; // Import reducer and State type

// Define RootState type by combining the types of all your reducers
export type RootState = ReturnType<typeof rootReducer>;

// Combine your reducers using combineReducers
const rootReducer = combineReducers({
  app: reducer,
  // Other reducers if any...
});

// Define an initial state for the store
const initialState: RootState = {
  app: reducer(undefined, { type: '' }), // Initialize app slice with reducer's initial state
  // Initialize other slices if any...
};

// Create the Redux store
const store = createStore(rootReducer, initialState, applyMiddleware(/* Add middleware if needed */));

export default store;
