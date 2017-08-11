/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  ERROR
} from './constants';

// The initial state of the App
const initialState = fromJS({
  username: '',
  isLoading: false,
  isLoggedIn: false,
  error: false,
  errorMessage: ''
});

function homeReducer(state = initialState, action) {
  switch(action.type){
        case LOGIN_PENDING:
            state = {
                ...state,
                isLoading: true
            }
            break;
        case LOGIN_SUCCESS:
            state = {
                ...state,
                isLoading: false,
                isLoggedIn: true
            }
            break;
        case ERROR:
            state = {
                ...state,
                isLoading: false,
                error: true,
                errorMessage: 'Incorrect username or password'
            }
            break;
    }
    return state;
}

export default homeReducer;
