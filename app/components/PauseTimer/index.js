import React, { Component } from 'react';

const PauseTimer = (props) => {
    return(
        <div className="floatLeft halfWidth fullHeight">
			<button className="std-btn stopTimer" onClick={() => props.pauseTimer()}><i className="ion-stop"></i>&nbsp;&nbsp;&nbsp;&nbsp;Stop timer</button>
		</div>
    );
}

export default PauseTimer;