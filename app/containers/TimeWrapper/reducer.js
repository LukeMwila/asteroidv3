/*
 * TimeWrapperReducer
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
  UPDATE_PENDING,
  UPDATE_SUCCESSFULL,
  UPDATE_ERROR
} from './constants';

// The initial state of the App
const initialState = fromJS({
	loadingUpdateProjectTimeStatus: false,
    updateProjectTimeStatus: false,
    updateProjectTimeStatusError: false
});

function updateProjectStatusReducer(state = initialState, action) {
    switch(action.type){
        case UPDATE_PENDING:
            state = {
                ...state,
                loadingUpdateProjectTimeStatus: true
            }
            break;
        case UPDATE_SUCCESSFULL:
            state = {
                ...state,
                loadingUpdateProjectTimeStatus: false,
				updateProjectTimeStatus: true
            }
            break;
        case UPDATE_ERROR:
            state = {
                ...state,
                loadingUpdateProjectTimeStatus: false,
                updateProjectTimeStatusError: true
            }
            break;
    }
    return state;
}

export default updateProjectStatusReducer;

