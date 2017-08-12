import React from 'react';
import {connect} from 'react-redux';
import ProjectHeadings from '../../components/ProjectHeadings';
import Projects from '../../components/Projects';
import TimeWrapper from '../TimeWrapper';
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
		this.chooseTask = this.chooseTask.bind(this);
        this.filterList = this.filterList.bind(this);
        this.toggleTasks = this.toggleTasks.bind(this);
    }

    componentWillMount(){
        this.props.getMyProjects(this.props.userID);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.timeObject !== null && nextProps.timeObject !== undefined){ 
            let timeObject = nextProps.timeObject[0];
            this.setState({				
                days: timeObject.days,
				hours: timeObject.hours,
				minutes: timeObject.minutes,
				seconds: timeObject.seconds,
				timeObject: timeObject,
				chosenTask: timeObject.project_name,
				showTasks: !this.state.showTasks
            })
        }
    }

    chooseTask(taskID){
        this.props.getMyProjectsTime(taskID);
        this.setState({ taskID: taskID});
    }

    toggleTasks(){
        this.setState({ showTasks: !this.state.showTasks });
    }

    filterList(e){
        this.setState({ search: e.target.value.substr(0, 30) });
    }
    
    render(){
        let allTasks;

        if (this.state.showTasks) {
			allTasks = (
				<div className="darkOverlayContainer floatLeft fullWidth fullHeight">
					<div className="absolute closeOverlay" onClick={this.toggleTasks}><i className="ion-close-circled"></i></div>
					<div className="modalContainer">
						<ProjectHeadings search={this.state.search} filterList={this.filterList} />
						<Projects myProjects={this.props.myProjects} search={this.state.search} chooseTask={this.chooseTask} />
					</div>
				</div>
			);
		};

        return(
            <div className="floatLeft thirtyThree fullHeight">
				<TimeWrapper userID={this.props.userID} taskID={this.state.taskID} chosenTask={this.state.chosenTask} timeObject={this.state.timeObject} toggleTasks={this.toggleTasks} />
				{allTasks}
			</div>
        );
    }
}

const mapStateToProps = (state) => {
    state = state.toJS()
    return{
        userID: state.userInformation.userID,
        myProjects: state.userProjects.userProjects,
        timeObject: state.userProjects.timeObject
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