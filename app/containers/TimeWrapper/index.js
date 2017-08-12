import React, { Component } from 'react';
import {connect} from 'react-redux';
import StartTimer from '../../components/StartTimer';
import PauseTimer from '../../components/PauseTimer';
import TimeSpent from '../../components/TimeSpent';
var classNames = require('classnames');
import { updateProjectTime } from './actions';

class TimeWrapper extends Component {

	constructor(props) {
		super(props);
		this.state = {
			timer: null,
			timeSpent: null,
			timeSpentToday: null,
			days: 0,
			hours: 0, 
			minutes: 0, 
			seconds: 0,
			updateStatus: false,
			chosenTask: '',
			trackTimer: false,
			taskID: 0
		};
		this.startTimer = this.startTimer.bind(this);
		this.pauseTimer = this.pauseTimer.bind(this);
	}

	componentWillMount() {
		this.setState({
			chosenTask: this.props.chosenTask
		});
	}

	addLeadingZero(time) {

		if (time <= 9) {
			return "0" + Math.floor(time);
		} else {
			return time;
		}

	}

	startTimer() {

		var self = this;

		if (self.props.taskID > 0) {
			
			var _seconds = 0;
			var _minutes = 0;
			var _hours = 0;
			var _days = 0;

			if (self.props.taskID == self.state.taskID) {
				var seconds = self.state.seconds;
				var minutes = self.state.minutes;
				var hours = self.state.hours;
				var days = self.state.days;
			} else {
				self.setState({ taskID: this.props.taskID })
				var seconds = self.props.timeObject.seconds;
				var minutes = self.props.timeObject.minutes;
				var hours = self.props.timeObject.hours;
				var days = self.props.timeObject.days;
			}

			self.state.timer = setInterval(function () {

				if (seconds == 59) {
					seconds = 0;
					minutes = Math.floor(minutes) + 1;
				} else {
					seconds = Math.floor(seconds) + 1;
				}
				seconds = self.addLeadingZero(seconds);
				
				if (_seconds == 59) {
					_seconds = 0; //
					_minutes = Math.floor(_minutes) + 1; //
				} else {
					_seconds = Math.floor(_seconds) + 1; //
				}
				_seconds = self.addLeadingZero(_seconds); //

				if (minutes == 59) {
					minutes = 0;
					hours = Math.floor(hours) + 1;
				}
				minutes = self.addLeadingZero(minutes);
				
				if (_minutes == 59) {
					_minutes = 0; //
					_hours = Math.floor(_hours) + 1; //
				}
				_minutes = self.addLeadingZero(_minutes); //

				if (hours == 24) {
					hours = 0;
					days = Math.floor(days) + 1;
				}
				
				if (_hours == 24) {
					_hours = 0; //
					_days = Math.floor(_days) + 1; //
				}

				var timeSpent = hours + " hours " + minutes + " minutes " + seconds + " seconds";
				var timeSpentToday = _hours + " hours " + _minutes + " minutes " + _seconds + " seconds";

				self.setState({
					timeSpent: timeSpent,
					timeSpentToday: timeSpentToday,
					days: days,
					hours: hours,
					minutes: minutes,
					seconds: seconds
				})

			}, 1000)

			self.setState({ trackTimer: true })

		} else {
			console.log("No task Id is set");
		}
		
	}

	pauseTimer() {
		clearInterval(this.state.timer);
        this.props.updateProjectTime(
            this.props.taskID,
            this.state.days,
            this.state.hours,
            this.state.minutes,
            this.state.seconds,
            this.state.timeSpentToday,
            this.props.userID
        );
		this.setState({ trackTimer: false })
	}

	render() {

		let iconClasses = classNames({
			'ion-ios-stopwatch': true,
			'clockBackground': this.state.trackTimer
		});

		return (
			<div>
				<div className="floatLeft fullHeight clockBlock">
					<i className={iconClasses}></i><br />
					<TimeSpent timeSpent={this.state.timeSpent} />
				</div>
				<div className="floatLeft fullHeight timerBlockContainer">
					<div className="floatLeft fullWidth timerBlock__layer">
						<button className="std-btn large-btn" onClick={this.props.toggleTasks}><i className="ion-plus"></i>&nbsp;&nbsp;&nbsp;&nbsp;Pick A Task</button>
					</div>
					<div className="floatLeft fullWidth timerBlock__layer">
						<span>{this.props.chosenTask}</span>
					</div>
					<div className="floatLeft fullWidth timerBlock__layer">
						<StartTimer startTimer={this.startTimer} />
						<PauseTimer pauseTimer={this.pauseTimer} />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	 state = state.toJS()
    return{
		updateProjectTimeStatus: state.timeWrapper.updateProjectTimeStatus,
		userID: state.userInformation.userID
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        updateProjectTime: (taskID,days,hours,minutes,seconds,timeSpentToday,userID) => {
            dispatch(updateProjectTime(taskID,days,hours,minutes,seconds,timeSpentToday,userID));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TimeWrapper);

