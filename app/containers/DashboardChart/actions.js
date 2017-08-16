import { POST, GET } from '../../functions/apiFunctions';
/*
 * DashboardChart Actions
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
  LOADED_CHART_DATA,
  ERROR
} from './constants';

function setLoading(){
    return{
        type: LOADING
    };
}

function setLoadedChartData(chartData,totalProjects){
    return{
        type: LOADED_CHART_DATA,
        chartData: chartData,
        totalProjects: totalProjects
    };
}

function setError(){
    return{
        type: ERROR
    };
}

export function getChartData(userID){

    var getData = [];
    return dispatch => {
        dispatch(setLoading());

        getData.push(
            {
                key: "userID", 
                value: userID
            }
        );

        GET("/api/getMyProjectsForThisYear.php", getData)
        .then(response => {
            if(response !== null && Array.isArray(response)){
                var totalProjects = response.reduce((sum, project) => {
                    return parseInt(sum) + parseInt(project);
                }, 0);
                dispatch(setLoadedChartData(response,totalProjects));
			}else{
				let emptyArray = [];
				dispatch(setLoadedChartData(emptyArray));
			}
        }).catch(e => {
            dispatch(setError());
        });
		
    }
}