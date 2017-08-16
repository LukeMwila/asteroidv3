import React from 'react';

class Month extends React.Component {

	getMonth(index) {
		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		return months[index];
	}

	render() {
		return (
			<div className="fullWidthContainer monthHeading headingHeight" >
				<div className="quarterWidth" onClick={this.props.previousMonth}><i className="ion-arrow-left-a"></i></div>
				<div className="threeQuarterWidth">{this.getMonth(this.props.month)} {this.props.year}</div>
				<div className="quarterWidth" onClick={this.props.nextMonth}><i className="ion-arrow-right-a"></i></div>
			</div>
		);
	}
}

export default Month;