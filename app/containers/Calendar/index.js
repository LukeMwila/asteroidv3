import React from 'react';
import {connect} from 'react-redux';
import TaskListing from '../../components/TaskListing';
import Month from '../../components/Month';
import Days from '../../components/Days';

class Calendar extends React.Component{

    constructor() {
		super();
		this.state = {
			currentMonth: new Date().getMonth(),
			currentYear: new Date().getFullYear(),
            daysOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            myProjects: [],
			totalProjects: 0,
			projectsOnThisDay: null
		};
		this.nextMonth = this.nextMonth.bind(this);
		this.previousMonth = this.previousMonth.bind(this);
		this.getDeadlineDates = this.getDeadlineDates.bind(this);
		this.createComporableDate = this.createComporableDate.bind(this);
		this.tasksOnThisDay = this.tasksOnThisDay.bind(this);
    }
    
    componentWillReceiveProps(nextProps) {
        let projects = nextProps.myProjects;
        if(projects !== undefined){
            this.setState({
			    myProjects: projects[0],
			    totalProjects: nextProps.totalProjects
            })
        }
    }
    
    nextMonth(e) {
		var self = this;
		if (self.state.currentMonth == 11) {
			var newYear = self.state.currentYear + 1;
			var newMonth = 0;
			self.setState({ currentMonth: newMonth, currentYear: newYear });
		} else {
			var newYear = self.state.currentYear;
			var newMonth = self.state.currentMonth + 1;
			self.setState({ currentMonth: newMonth, currentYear: newYear });
		}
	}

	previousMonth(e) {
		var self = this;
		if (self.state.currentMonth == 0) {
			var newYear = self.state.currentYear - 1;
			var newMonth = 11;
			self.setState({ currentMonth: newMonth, currentYear: newYear });
		} else {
			var newYear = self.state.currentYear;
			var newMonth = self.state.currentMonth - 1;
			self.setState({ currentMonth: newMonth, currentYear: newYear });
		}
	}

	tasksOnThisDay(date) {
		var tasks = [];
		var taskDates = this.state.myProjects.map((project) => {
			if (project.deadline == date){
				tasks.push(project);
			}
		});

		if (tasks.length == 0) {
			tasks = null;
		}

		this.setState({ projectsOnThisDay : tasks});
	}

	getDaysInMonth(month, year) {
		var date = new Date(year, month, 1);
		var days = [];

		while (date.getMonth() === month) {
			days.push(new Date(date));
			date.setDate(date.getDate() + 1);
		}
		return days;
	}

	addLeadingZero(value) {

		if (value <= 9) {
			return "0" + Math.floor(value);
		} else {
			return value;
		}

	}

	getActualMonth(month) {
		var month = month + 1;
		month = this.addLeadingZero(month);
		return month;
	}

	createComporableDate(date) {
		var date = this.addLeadingZero(date);
		date += "/" + this.getActualMonth(this.state.currentMonth) + "/" + this.state.currentYear;
		return date;
	}

	getDeadlineDates() {

        var deadlines = [];
 
        if(this.state.myProjects.length > 0){
            var deadlinesDates = this.state.myProjects.map((project) => {
			    deadlines.push(project.deadline);
		    });
        }
		
		return deadlines;
	}

	getTodaysDate() {
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1; //January is 0!

		var yyyy = today.getFullYear();
		if (dd < 10) {
			dd = '0' + dd;
		}
		if (mm < 10) {
			mm = '0' + mm;
		}
		return today = dd + '/' + mm + '/' + yyyy;
	}

    render() {

        var today = this.getTodaysDate();
		var dateObjects = this.getDaysInMonth(this.state.currentMonth, this.state.currentYear);
		var firstDayOfMonth = dateObjects[0].getDay();

		var blankDates = [];
		if (firstDayOfMonth != 0) {
			for (var i = 0; i < firstDayOfMonth; i++) {
				blankDates.push(i);
			}

			var blankDivs = blankDates.map((blankDate) => {
				return <div className="blockWidth dateBlockHeight" key={blankDate}></div>
			});
		} else {
			var blankDivs = "";
		}

		var deadlines = this.getDeadlineDates();

		var dates = dateObjects.map((date) => {
			var _date = this.createComporableDate(date.getDate());

			if (deadlines.indexOf(_date) > -1) {
				return <div className="blockWidth dateBlockHeight" key={date.getDate()} onClick={() => this.tasksOnThisDay(_date)}>
					<div className="dateCircleDiv highlightDate">
						{date.getDate()}
					</div>
				</div>

			} else {

				if (today == _date){
					return <div className="blockWidth dateBlockHeight" key={date.getDate()} onClick={() => this.tasksOnThisDay(_date)}>
						<div className="dateCircleDiv dateToday">
							{date.getDate()}
						</div>
					</div>

				} else {
					return <div className="blockWidth dateBlockHeight" key={date.getDate()} onClick={() => this.tasksOnThisDay(_date)}>
						<div className="dateCircleDiv">
							{date.getDate()}
						</div>
					</div>
				}

			}

        });
        
		return (
			<div className="floatLeft fullWidth bottomPanel">
				<div className="container">
					<div className="floatLeft fortyNine fullHeight">
						<Month month={this.state.currentMonth} year={this.state.currentYear} nextMonth={this.nextMonth} previousMonth={this.previousMonth} />
						<Days daysOfWeek={this.state.daysOfWeek} />
						<div className="fullWidthContainer">
							{blankDivs}{dates}
						</div>
					</div>
					<div className="floatLeft dividingLine border"></div>
					<TaskListing projectsOnThisDay={this.state.projectsOnThisDay} />
				</div>
			</div>
        );
        
	}
}

const mapStateToProps = (state) => {
    state = state.toJS()
    return{
        myProjects: state.userProjects.userProjects,
        totalProjects: state.dashboardChart.totalProjects
    }
}

export default connect(mapStateToProps)(Calendar);