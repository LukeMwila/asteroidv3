/*
 * GraphInformationConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOADING_WORK_IN_PROGRESS = 'react-boilerplate/GraphInformation/LOADING_WORK_IN_PROGRESS';
export const LOADING_INVOICED = 'react-boilerplate/GraphInformation/LOADING_INVOICED';
export const LOADING_COLLECTED = 'react-boilerplate/GraphInformation/LOADING_COLLECTED';
export const LOADED_WORK_IN_PROGRESS = 'react-boilerplate/GraphInformation/LOADED_WORK_IN_PROGRESS';
export const LOADED_INVOICED = 'react-boilerplate/GraphInformation/LOADED_INVOICED';
export const LOADED_COLLECTED = 'react-boilerplate/GraphInformation/LOADED_COLLECTED';
export const WORK_IN_PROGRESS_ERROR = 'react-boilerplate/GraphInformation/WORK_IN_PROGRESS_ERROR';
export const INVOICED_ERROR = 'react-boilerplate/GraphInformation/INVOICED_ERROR';
export const COLLECTED_ERROR = 'react-boilerplate/GraphInformation/COLLECTED_ERROR';
