import { POST, GET } from '../../functions/apiFunctions';
/*
 * MyTeam Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOADING,
  LOADED_TEAM,
  ERROR
} from './constants';

function setLoading(){
    return{
        type: LOADING
    };
}

function setLoadedTeam(team){
    return{
        type: LOADED_TEAM,
        team: team
    };
}

function setError(){
    return{
        type: ERROR
    };
}

export function getTeam(userID, companyID){
    var getData = [];

    return dispatch => {
        dispatch(setLoading());

        getData.push(
            {
                key: "userID", 
                value: userID
            },
            {
                key: "companyID",
                value: companyID
            }
        );

        GET("/api/getMyTeam.php", getData)
        .then(response => {
            if(response.length > 0){
                dispatch(setLoadedTeam(response));
			}else{
				let emptyArray = [];
				dispatch(setLoadedTeam(emptyArray));
			}
        }).catch(e => {
            dispatch(setError());
        });
		
    }
}