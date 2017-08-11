/*
 * TimeBlockReducer
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
  LOADING_PROJECTS,
  LOADED_PROJECTS,
  ERROR_LOADING_PROJECTS
} from './constants';

// The initial state of the App
const initialState = fromJS({
	loadingProjects: false,
    userProjects: [],
	errorLoadingProjects: false
});

function userProjectsReducer(state = initialState, action) {
  switch(action.type){
        case LOADING_PROJECTS:
            state = {
                ...state,
                loadingProjects: true
            }
            break;
        case LOADED_PROJECTS:
            state = {
                ...state,
                loadingProjects: false,
				userProjects: [action.projects]
            }
            break;
        case ERROR_LOADING_PROJECTS:
            state = {
                ...state,
                loadingProjects: false,
                errorLoadingProjects: true
            }
            break;
    }
    return state;
}

export default userProjectsReducer;
