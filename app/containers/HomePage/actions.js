/*
 * Home Actions
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
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  ERROR
} from './constants';

function setLoginPending(){
    return{
        type: LOGIN_PENDING
    };
}

function setLoginSuccess(username){
    return{
        type: LOGIN_SUCCESS,
        username: username
    };
}

function setLoginError(){
    return{
        type: ERROR
    };
}

export function loginUser(username, password){

    let url = "http://localhost/dummyAPI/login/index.php";
    return dispatch => {
        dispatch(setLoginPending());

        var formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        fetch(url, {
            method: 'post',
            body: formData
        }).then(function(response){

            return response.json();

        }).then(function(parsedData){

            if(parsedData[0] === true){

                dispatch(setLoginSuccess(username));

            }else{

                dispatch(setLoginError());

            }
        }).catch(function(){

            dispatch(setLoginError());

        });
        
    }
}