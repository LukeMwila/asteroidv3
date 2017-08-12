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
    var getData = [];

    return dispatch => {
        dispatch(setUpdatePending());

        getData.push(
            {
                key: "taskID", 
                value: taskID
            },
            {
                key: "days", 
                value: days
            },
            {
                key: "hours", 
                value: hours
            },
            {
                key: "minutes", 
                value: minutes
            },
            {
                key: "seconds", 
                value: seconds
            },
            {
                key: "timeSpentToday", 
                value: timeSpentToday
            },
            {
                key: "userID", 
                value: userID
            }
        );

        GET("/api/updateMyProject.php", getData)
        .then(response => {
            dispatch(setUpdateSuccessful());
        }).catch(e => {
            dispatch(setUpdateError());
        });
		
    }
}

