import { POST, GET } from '../../functions/apiFunctions';
/*
 * TimeBlock Actions
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
  LOADING_PROJECTS,
  LOADED_PROJECTS,
  ERROR_LOADING_PROJECTS
} from './constants';

function setLoadingProjects(){
    return{
        type: LOADING_PROJECTS
    };
}

function setLoadedProjects(projects){
    return{
        type: LOADED_PROJECTS,
        projects: projects
    };
}

function setErrorLoadingProjects(){
    return{
        type: ERROR_LOADING_PROJECTS
    };
}

export function getMyProjects(userID){
    var getData = [];

    return dispatch => {
        dispatch(setLoadingProjects());

        getData.push(
            {
                key: "userID", 
                value: userID
            }
        );

        GET("/api/getMyProjects.php", getData)
        .then(response => {
            if(response.length > 0){
                dispatch(setLoadedProjects(response));
			}else{
				let emptyArray = [];
				dispatch(setLoadedProjects(emptyArray));
			}
        }).catch(e => {
            dispatch(setErrorLoadingProjects());
        });
		
    }
}