import React, { Component } from 'react';

const StartTimer = (props) => {
    return(
        <div className="floatLeft halfWidth fullHeight">
		    <button className="std-btn startTimer" onClick={() => props.startTimer()}><i className="ion-play"></i>&nbsp;&nbsp;&nbsp;&nbsp;Start timer</button>
		</div>
    );
}

export default StartTimer;