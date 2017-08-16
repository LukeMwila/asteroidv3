import React from 'react';

class Days extends React.Component {

	render() {

		var days = this.props.daysOfWeek.map((day) => {
			return <div className="blockWidth dayHeadingHeight" key={day.toString()}>{day}</div>
		});

		return (
			<div className="fullWidthContainer dayHeadingHeightContainer">
				{ days }
			</div>
		);
	}
}

export default Days;