import { POST, GET } from '../../functions/apiFunctions';
/*
 * TimeWrapperActions
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

function setUpdatePending(){
    return{
        type: UPDATE_PENDING
    };
}

function setUpdateSuccessful(){
    return{
        type: UPDATE_SUCCESSFULL
    };
}

function setUpdateError(){
    return{
        type: UPDATE_ERROR
    };
}

export function updateProjectTime(taskID,days,hours,minutes,seconds,timeSpentToday,userID){

    return dispatch => {
        dispatch(setUpdatePending());

        let postData = {
            "_id" : taskID,
            "days" : days,
            "hours" : hours,
            "minutes" : minutes,
            "seconds" : seconds,
            "timeSpentToday" : timeSpentToday,
            "userID" : userID
        }

        POST("update-project", postData)
        .then(response => {
            dispatch(setUpdateSuccessful());
        }).catch(e => {
            dispatch(setUpdateError());
        });
		
    }
}

