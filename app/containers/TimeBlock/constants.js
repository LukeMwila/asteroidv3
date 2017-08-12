/*
 * TimeBlockConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOADING_PROJECTS = 'asteroidv3/TimeBlock/LOADING_PROJECTS';
export const LOADED_PROJECTS = 'asteroidv3/TimeBlock/LOADED_PROJECTS';
export const ERROR_LOADING_PROJECTS = 'asteroidv3/TimeBlock/ERROR_LOADING_PROJECTS';
export const LOADING_PROJECT_TIME = 'asteroidv3/TimeBlock/LOADING_PROJECT_TIME';
export const LOADED_PROJECT_TIME = 'asteroidv3/TimeBlock/LOADED_PROJECT_TIME';
export const ERROR_LOADING_PROJECT_TIME = 'asteroidv3/TimeBlock/ERROR_LOADING_PROJECT_TIME';
