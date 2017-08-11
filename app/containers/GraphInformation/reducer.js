/*
 * GraphInformationReducer
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

// The initial state of the App
const initialState = fromJS({
	loadingWorkInProgressCharts: false,
	loadingInvoicedCharts: false,
	loadingCollectedCharts: false,
	workInProgressChartData: [["0","0","0"]],
	invoicedChartData: [["0","0","0"]],
	collectedChartData: [["0","0","0"]],
	workInProgressError: false,
	invoiceError: false,
	collectedError: false,
});

function graphInformationReducer(state = initialState, action) {
  switch(action.type){
        case LOADING_WORK_IN_PROGRESS:
            state = {
                ...state,
                loadingWorkInProgressCharts: true
            }
            break;
		case LOADING_INVOICED:
            state = {
                ...state,
                loadingInvoicedCharts: true
            }
            break;
		case LOADING_COLLECTED:
            state = {
                ...state,
                loadingCollectedCharts: true
            }
            break;
        case LOADED_WORK_IN_PROGRESS:
            state = {
                ...state,
                loadingWorkInProgressCharts: false,
				workInProgressChartData: [action.workInProgressChartData]
            }
            break;
		case LOADED_INVOICED:
            state = {
                ...state,
                loadingInvoicedCharts: false,
				invoicedChartData: [action.invoicedChartData]
            }
            break;
		case LOADED_COLLECTED:
            state = {
                ...state,
                loadingCollectedCharts: false,
				collectedChartData: [action.collectedChartData]
            }
            break;
        case WORK_IN_PROGRESS_ERROR:
            state = {
                ...state,
                workInProgressError: true
            }
            break;
		case INVOICED_ERROR:
            state = {
                ...state,
                invoiceError: true
            }
            break;
		case COLLECTED_ERROR:
            state = {
                ...state,
                collectedError: true
            }
            break;
    }
    return state;
}

export default graphInformationReducer;