import React from 'react';
import DashboardTopHalf from '../DashboardTopHalf';
//import DashboardBottomHalf from '../DashboardBottomHalf';

const DashboardMain = () => {
    return(
        <div className="floatLeft largeWidthPanel minimumHeight whiteGreyGradient">
			<DashboardTopHalf />
			<div></div>
		</div>
    );
}

export default DashboardMain;