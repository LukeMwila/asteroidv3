import React from 'react';

const SideNavLink = (props) => {
    return(
        <div className="floatLeft fullWidth sidePanelDiv tooltip"><i className={props.icon}></i>
			<span className="tooltiptext">{props.heading}</span>
		</div>
    );
}

export default SideNavLink;