import React from 'react';
import {connect} from 'react-redux';
import {getMyProjects, getMyProjectsTime } from './actions';

class TimeBlock extends React.Component{

    constructor() {
		super();
		this.state = {
			showTasks: false,
			myProjects: [],
			taskID: 0,
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
			timeObject: null,
			chosenTask: 'No task selected',
			search: ''
		}
		//this.chooseTask = this.chooseTask.bind(this);
		//this.filterList = this.filterList.bind(this);
    }
    
    render(){
        return(
            <div>hello</div>
        );
    }
}

const mapStateToProps = (state) => {
    state = state.toJS()
    return{
        userID: state.userInformation.userID,
        projects: state.userProjects.userProjects
    }     
}

const mapDispatchToProps = (dispatch) => {
    return{
        getMyProjectsTime: (taskID) => {
            dispatch(getMyProjectsTime(taskID));
        },
        getMyProjects: (userID) => {
            dispatch(getMyProjects(userID));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeBlock);