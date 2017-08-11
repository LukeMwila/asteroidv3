import React from 'react';
import { connect } from 'react-redux';
import { getTeam } from './actions';

class MyTeam extends React.Component{

    componentWillMount(){
		this.props.getTeam(this.props.userID, this.props.companyID);	
	}

    render(){

        let myTeam = this.props.team;
        let displayTeamContainer = "";

        if(myTeam !== null && Array.isArray(myTeam) && myTeam[0] !== undefined){
			
			myTeam = myTeam[0].map((team_member) => {
				
				var profilePicture = {
				  background: team_member.profile_picture
				};
				
				return <div className="floatLeft fullWidth emp__container" key={team_member.user_id}>
					<div className="floatLeft fullHeight emp__container_avatar ">
						<div className="avatar_circle" style={{backgroundImage: `url(${team_member.profile_picture})`}} >
							<div className="onlineStatus">
								
							</div>
						</div>
					</div>
					<div className="floatLeft fullHeight emp__container_username" >
						{team_member.full_name}
					</div>
				</div>
				
			});
			
		}else{
			myTeam = "";
		}

		if (this.props.showTeam) {
			displayTeamContainer = (
				<div className="employeeSideContainer">
					{myTeam}
				</div>
			);
		};
		
        return(
			<div>
				{displayTeamContainer}
			</div>
        );
    }
}

const mapStateToProps = (state) => {
    state = state.toJS()
    return{
        team: state.team.team
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getTeam: (userID, companyID) => {
            dispatch(getTeam(userID, companyID));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTeam);