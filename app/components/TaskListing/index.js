import React from 'react';
import Tasks from '../Tasks';

class TaskListing extends React.Component {
	render() {
		return (
			<div className="floatLeft fortyNine fullHeight ">
				<div className="panelHeadingContainer">
					<span>&nbsp;&nbsp;TASKS</span>
				</div>
				<div className="panelMainContainer">
					<Tasks projectsOnThisDay={this.props.projectsOnThisDay} />
				</div>
			</div>	
		);
	}
}

export default TaskListing;