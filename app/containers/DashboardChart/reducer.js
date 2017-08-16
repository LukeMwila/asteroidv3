/*
 * DashboardChartReducer
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
  LOADING,
  LOADED_CHART_DATA,
  ERROR
} from './constants';

// The initial state of the App
const initialState = fromJS({
	loadingChartData: false,
    chartData: ["0","0","0","0","0","0","0","0","0","0","0","0"],
    totalProjects: 0,
	errorLoadingChartData: false
});

function dashboardChartReducer(state = initialState, action) {
  switch(action.type){
        case LOADING:
            state = {
                ...state,
                loadingChartData: true
            }
            break;
        case LOADED_CHART_DATA:
            state = {
                ...state,
                loadingChartData: false,
                chartData: [action.chartData],
                totalProjects: action.totalProjects
            }
            break;
        case ERROR:
            state = {
                ...state,
                loadingChartData: false,
                errorLoadingChartData: true
            }
            break;
    }
    return state;
} 

export default dashboardChartReducer;

