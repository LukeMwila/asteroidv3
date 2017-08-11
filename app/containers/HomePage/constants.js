/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'react-boilerplate/Home/CHANGE_USERNAME';
export const LOGIN_PENDING = 'react-boilerplate/Home/LOGIN_PENDING';
export const LOGIN_SUCCESS = 'react-boilerplate/Home/LOGIN_SUCCESS';
export const ERROR = 'react-boilerplate/Home/ERROR';
