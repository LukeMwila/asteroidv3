import React from 'react';
import DashboardChart from '../../containers/DashboardChart';
import TimeBlock from '../../containers/TimeBlock';

const DashboardTopHalf = () => {
    return(
       <div className="floatLeft fullWidth topPanel greaterHeight">
			<div className="container">
				<div className="floatLeft thirtyThree fullHeight">

				</div>
				<div className="floatLeft dividingLine border"></div>
				<DashboardChart />
				<div className="floatLeft dividingLine border"></div>
				<TimeBlock />
			</div>
		</div>
    );
}

export default DashboardTopHalf;