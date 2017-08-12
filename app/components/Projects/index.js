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
				return <div className="floatLeft fullWidth heightAuto greyBottomBorder" key={task.project_id}>
						<div className="floatLeft fullHeight modalCellBlock center">
							<span className="taskItem">{task.category}</span>
						</div>
						<div className="floatLeft fullHeight modalCellBlock">
							<span className="taskItem">{task.project_name}</span>
						</div>
						<div className="floatLeft fullHeight modalCellBlock">
							<span className="taskItem">{task.client_name}</span>
						</div>
						<div className="floatLeft fullHeight modalCellBlock">
							<span className="taskItem">{task.interpreted_time}</span>
						</div>
						<div className="floatLeft fullHeight modalCellBlock">
							<span className="taskItem">{task.deadline}</span>
						</div>
						<div className="floatLeft fullHeight center modalCellBlock" onClick={() => this.props.chooseTask(task.project_id)} >
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