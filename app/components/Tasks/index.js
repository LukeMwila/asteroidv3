import React from 'react';

class Tasks extends React.Component {

	getTimeSpent(timeLogged) {
		var timeArray = timeLogged.split(":");
		var hoursSpent = timeArray[1]; 
		var minutesSpent = timeArray[2]; 
		var timeSpent = hoursSpent + " hrs " + minutesSpent + " mins";
		return timeSpent;
	}

	render() {

		var tasks = this.props.projectsOnThisDay;

		if (tasks != null){
			
			var display = tasks.map((task) => {
				
				return 	<div className="taskCard" key={task.project_id} >
							<div className="taskCard__top floatLeft fullWidth curvedTopCorners">
								<span className="uppercase">{task.client_name}:&nbsp;&nbsp;{task.project_name}</span>
							</div>
							<div className="taskCard__middle floatLeft fullWidth">
								<p>{task.project_details}</p>
							</div>
							<div className="taskCard__bottom floatLeft fullWidth">
								<div className="halfWidth floatLeft">
									<span><i className="ion-ios-stopwatch"></i>&nbsp;&nbsp;&nbsp;&nbsp;{task.interpreted_time}</span>
								</div>
								<div className="halfWidth floatLeft">
									<button className="std-btn medium-btn"><i className="ion-eye"></i>&nbsp;&nbsp;&nbsp;&nbsp;View Details</button>
								</div>
							</div>
						</div>
			});

		} else {
			display = "There are no tasks on this day.";
		}
		
		return (
			<div>
				{display}
			</div>
		);
	}
}

export default Tasks;