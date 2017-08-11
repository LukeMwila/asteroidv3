/*
 * MyTeamReducer
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
  LOADING,
  LOADED_TEAM,
  SHOW_TEAM,
  ERROR
} from './constants';

// The initial state of the App
const initialState = fromJS({
	isLoading: true,
    team: [],
	error: false
});

function teamReducer(state = initialState, action) {
  switch(action.type){
        case LOADING:
            state = {
                ...state,
                isLoading: true
            }
            break;
        case LOADED_TEAM:
            state = {
                ...state,
                isLoading: false,
				team: [action.team]
            }
            break;
        case ERROR:
            state = {
                ...state,
                isLoading: false,
                error: true
            }
            break;
    }
    return state;
}

export default teamReducer;
