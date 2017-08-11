import React from 'react';
import MyTeam from '../../containers/MyTeam';
import SideNavLink from '../SideNavLink';

const SideNavigation = (props) => {
    return(
        <div>
            <MyTeam showTeam={props.showTeam} companyID={props.companyID} userID={props.userID} />
            <div className="floatLeft shortWidthPanel minimumHeight blueGreenGradient">
                <SideNavLink heading={"Dashboard"} icon={"ion-home"} />
                <SideNavLink heading={"Notifications"} icon={"ion-android-notifications"} />
                <SideNavLink heading={"My Tasks"} icon={"ion-calendar"} />
                <SideNavLink heading={"Leaderboard"} icon={"ion-flag"} />
                <div onClick={() => props.toggleTeam()} className="floatLeft fullWidth sidePanelDiv tooltip"><i className="ion-android-contacts"></i>
                    <span className="tooltiptext">Team</span>
                </div>
                <SideNavLink heading={"My Profile"} icon={"ion-android-contact"} />
                <SideNavLink heading={"Profile Profile"} icon={"ion-gear-a"} />
			</div>
		</div>
    );
}

export default SideNavigation;