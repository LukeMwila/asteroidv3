import React from 'react';

class Projects extends React.Component{
    render(){
        if (this.props.myProjects[0].length > 0) {
	
			let filteredProjects = this.props.myProjects[0].filter(
				(task) => {
					return task.project_name.toUpperCase().indexOf(this.props.search.toUpperCase()) !== -1;
				}
			);

			var display = filteredProjects.map((task) => {
				return <div className="floatLeft fullWidth heightAuto greyBottomBorder" key={task._id}>
						<div className="floatLeft fullHeight modalCellBlock center">
							<span className="taskItem">{task.project_category}</span>
						</div>
						<div className="floatLeft fullHeight modalCellBlock">
							<span className="taskItem">{task.project_name}</span>
						</div>
						<div className="floatLeft fullHeight modalCellBlock">
							<span className="taskItem">{task.client_id}</span>
						</div>
						<div className="floatLeft fullHeight modalCellBlock">
							<span className="taskItem">{task.time_spent_on_project}</span>
						</div>
						<div className="floatLeft fullHeight modalCellBlock">
							<span className="taskItem">{task.deadline}</span>
						</div>
						<div className="floatLeft fullHeight center modalCellBlock" onClick={() => this.props.chooseTask(task._id)} >
							<div className="chooseTask"><i className="ion-plus-circled"></i></div>
						</div>
					</div>
			});

		} else {
			display = "You currently have no tasks.";
		}

		return(
			<div className="floatLeft fullWidth modalContainer__main">
				{display}
			</div>
		);
    }
}

export default Projects;