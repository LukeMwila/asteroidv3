/*
 * TimeWrapperConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const UPDATE_PENDING = 'asteroidv3/TimeWrapper/UPDATE_PENDING';
export const UPDATE_SUCCESSFULL = 'asteroidv3/TimeWrapper/UPDATE_SUCCESSFULL';
export const UPDATE_ERROR = 'asteroidv3/TimeWrapper/UPDATE_ERROR';
