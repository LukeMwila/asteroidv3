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
  ERROR_LOADING_PROJECTS,
  LOADING_PROJECT_TIME,
  LOADED_PROJECT_TIME,
  ERROR_LOADING_PROJECT_TIME
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

function setLoadingProjectTime(){
    return{
        type: LOADING_PROJECT_TIME
    };
}

function setLoadedProjectTime(timeObject){
    return{
        type: LOADED_PROJECT_TIME,
        timeObject: timeObject
    };
}

function setErrorLoadingProjectTime(){
    return{
        type: ERROR_LOADING_PROJECT_TIME
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

        GET("user-projects", getData)
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

export function getMyProjectsTime(taskID){
    var getData = [];

    return dispatch => {
        dispatch(setLoadingProjectTime());

        getData.push(
            {
                key: "taskID", 
                value: taskID
            }
        );
        console.log("Here!!!!!!" + taskID)
        GET("project-time", getData)
        .then(response => {
            if(response.projectName !== null){
                dispatch(setLoadedProjectTime(response));
			}
        }).catch(e => {
            dispatch(setErrorLoadingProjectTime());
        });
		
    }

}