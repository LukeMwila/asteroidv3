import React from 'react';

const TopNavigation = (props) => {
    return(
        <nav>
			<div className="floatLeft fullHeight topNavigation__left">
				
			</div>
			<div className="floatLeft fullHeight topNavigation__center">
				
			</div>
			<div className="floatLeft fullHeight topNavigation__right">
				<div className="floatLeft fullHeight topNavigation_avatar_container">
					<div className="profile_avatar"></div>
				</div>
				<div className="floatLeft fullHeight topNavigation_name_container">
					<span>{props.username}</span>
				</div>
				<div className="floatLeft fullHeight topNavigation_menu_container center">
					<i className="ion-android-more-vertical"></i>
				</div>
			</div>
        </nav>
    );
}

export default TopNavigation;