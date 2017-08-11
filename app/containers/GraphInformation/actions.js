/*
 * GraphInformation Actions
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
  LOADING_WORK_IN_PROGRESS,
  LOADING_INVOICED,
  LOADING_COLLECTED,
  LOADED_WORK_IN_PROGRESS,
  LOADED_INVOICED, 
  LOADED_COLLECTED,
  WORK_IN_PROGRESS_ERROR,
  INVOICED_ERROR,
  COLLECTED_ERROR
} from './constants';

//LOADING DATA

function setLoadingWorkInProgress(){
    return{
        type: LOADING_WORK_IN_PROGRESS
    };
}

function setLoadingInvoiced(){
    return{
        type: LOADING_INVOICED
    };
}

function setLoadingCollected(){
    return{
        type: LOADING_COLLECTED
    };
}

//LOADED DATA

function workInProgressLast3Months(chartData){
	return{
		type: LOADED_WORK_IN_PROGRESS,
		workInProgressChartData: chartData
	}
}

export function getWorkInProgressLast3Months(){

    let url = "http://localhost/dummyAPI/matters-and-briefs/workInProgressLast3Months.php";
    return dispatch => {
        dispatch(setLoadingWorkInProgress());
		
		var username = 'Margaret Baker';
        var formData = new FormData();
        formData.append('username', username);

        fetch(url, {
            method: 'post',
            body: formData
        }).then(function(response){

            return response.json();

        }).then(function(parsedData){
			
            if(parsedData.length > 0){
                dispatch(workInProgressLast3Months(parsedData));
            }else{
				let emptyArray = [];
                dispatch(workInProgressLast3Months(emptyArray));
            }

        }).catch(function(){

            dispatch(setWorkInProgressError());

        });
        
    }
}

function invoicedLast3Months(chartData){
	return{
		type: LOADED_INVOICED,
		invoicedChartData: chartData
	}
}

export function getInvoicedLast3Months(){

    let url = "http://localhost/dummyAPI/matters-and-briefs/workInProgressLast3Months.php";
    return dispatch => {
        dispatch(setLoadingInvoiced());
		
		var username = 'Margaret Baker';
        var formData = new FormData();
        formData.append('username', username);

        fetch(url, {
            method: 'post',
            body: formData
        }).then(function(response){

            return response.json();

        }).then(function(parsedData){
			
            if(parsedData.length > 0){
                dispatch(invoicedLast3Months(parsedData));
            }else{
				let emptyArray = [];
                dispatch(invoicedLast3Months(emptyArray));
            }

        }).catch(function(){

            dispatch(setInvoicedError());

        });
        
    }
}

function collectedLast3Months(chartData){
	return{
		type: LOADED_COLLECTED,
		collectedChartData: chartData
	}
}

export function getCollectedLast3Months(){

    let url = "http://localhost/dummyAPI/matters-and-briefs/workInProgressLast3Months.php";
    return dispatch => {
        dispatch(setLoadingCollected());
		
		var username = 'Margaret Baker';
        var formData = new FormData();
        formData.append('username', username);

        fetch(url, {
            method: 'post',
            body: formData
        }).then(function(response){

            return response.json();

        }).then(function(parsedData){
			
            if(parsedData.length > 0){
                dispatch(collectedLast3Months(parsedData));
            }else{
				let emptyArray = [];
                dispatch(collectedLast3Months(emptyArray));
            }

        }).catch(function(){

            dispatch(setCollectedError());

        });
        
    }
}

//ERRORS

function setWorkInProgressError(){
	return{
		type: WORK_IN_PROGRESS_ERROR
	}
}

function setInvoicedError(){
	return{
		type: INVOICED_ERROR
	}
}

function setCollectedError(){
	return{
		type: COLLECTED_ERROR
	}
}