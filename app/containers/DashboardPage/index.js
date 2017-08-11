/*
 * DashboardPage
 *
 * This is the dashboard for a logged in advocate, at the '/advocate' route
 */

import React from 'react';
import Helmet from 'react-helmet';
var classNames = require('classnames'); 
import { connect } from 'react-redux';
import TopNavigation from '../../components/TopNavigation';
import SideNavigation from '../../components/SideNavigation';
import DashboardMain from '../../components/DashboardMain';

class Dashboard extends React.PureComponent{
	
	constructor(props){
		super(props);
		this.state ={
			showTeam: false
		}
		this.toggleTeam = this.toggleTeam.bind(this);
	}

	toggleTeam() {
		this.setState({ showTeam: !this.state.showTeam });
	}
	
    render(){
		
		let {userID, username, companyID} = this.props;
		
        return(
			<div>
				<TopNavigation username={username} />
				<SideNavigation 
					userID={userID} 
					companyID={companyID} 
					showTeam={this.state.showTeam}
					toggleTeam={this.toggleTeam}
				/>	
				<DashboardMain />
			</div>
        );
    }
}

const mapStateToProps = (state) => {
	state = state.toJS()
	return {
		userID: state.userInformation.userID,
		username: state.userInformation.username,
		companyID: state.userInformation.companyID
	}
}

export default connect(mapStateToProps)(Dashboard);