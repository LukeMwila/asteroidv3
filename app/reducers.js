/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import globalReducer from 'containers/App/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import teamReducer from 'containers/MyTeam/reducer';
import userProjectsReducer from 'containers/TimeBlock/reducer';
import updateProjectStatusReducer from 'containers/TimeWrapper/reducer';
import dashboardChartReducer from 'containers/DashboardChart/reducer';
import userInformationReducer from 'containers/Login/reducer';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    route: routeReducer,
    global: globalReducer,
    language: languageProviderReducer,
    team: teamReducer,
    userProjects: userProjectsReducer,
    timeWrapper: updateProjectStatusReducer,
    dashboardChart: dashboardChartReducer,
	  userInformation: userInformationReducer,
    ...asyncReducers,
  });
}
