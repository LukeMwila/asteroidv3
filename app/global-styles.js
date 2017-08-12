import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  * {
    box-sizing: border-box;
}

body{
	overflow-x: hidden;
}

h1 {
    font-weight: 200;
    color: #3b414c;
    font-size: 20px;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.app {
    white-space: nowrap;
    height: 100%;
}

.list {
    position: relative;
    display: inline-block;
    vertical-align: top;
    white-space: normal;
    height: 100%;
    width: 33%;
    padding: 0 20px;
    overflow: auto;
}

    .list:not(:last-child):after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 1px;
        height: 99%;
        background: linear-gradient(to bottom, #eee 0%, #ccc 50%, #eee 100%) fixed;
    }

.card {
    position: relative;
    z-index: 1;
    background: #fff;
    width: 100%;
    padding: 10px 10px 10px 15px;
    margin: 0 0 10px 0;
    overflow: auto;
    border: 1px solid #e5e5df;
    border-radius: 3px;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
}

.card__title {
    font-weight: bold;
    border-bottom: solid 5px transparent;
}

    .card__title:before {
        display: inline-block;
        width: 1em;
        content: '>';
    }

.card__title--is-open:before {
    content: 'Y';
}

.checklist__task:first-child {
    margin-top: 10px;
    padding-top: 10px;
    border-top: dashed 1px #ddd;
}

.checklist__task--remove:after {
    display: inline-block;
    color: #d66;
    content: "+";
}

/*Calendar*/

.dateBlockHeightWithDeadline {
    background: #00cc66 !important;
    color: #fff !important;
}

body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    color: #666;
    font-size: 12px;
}

/* Let's get this party started */
::-webkit-scrollbar {
    width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.3);
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.6);
    border-radius: 6px;
    -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.5);
}

    ::-webkit-scrollbar-thumb:window-inactive {
        background: rgba(0,0,0,0.4);
    }

nav {
    width: 100%;
    float: left;
    height: 50px;
    background: #fff;
    border-bottom: 2px solid #ccc;
}

.container {
    width: calc(100% - 30px);
    margin: 0 auto;
    background: #fff;
    height: calc(100% - 20px);
    position: relative;
    top: 10px;
    border-radius: 8px;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.15);
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.15);
}

.floatLeft {
    float: left;
}

.fullWidth {
    width: 100%;
}

.fortyNine {
    width: calc(50% - 1px);
}

.border {
    height: calc(100% - 20px);
    position: relative;
    top: 10px;
}

.dividingLine {
    width: 2px;
    background: #f2f2f2;
}

.fullHeight {
    height: 100%;
}

.halfWidth {
    width: 50%;
}

.topPanel {
    height: 180px;
}

.bottomPanel {
    height: 470px;
}

.shortWidthPanel {
    background: yellow;
    width: 55px;
}

.largeWidthPanel {
    width: calc(100% - 55px);
}

.minimumHeight {
    min-height: 780px;
}

.sidePanelDiv {
    height: 50px;
    text-align: center;
    line-height: 50px;
}

    .sidePanelDiv i {
        color: #ffffff;
        font-size: 1.75em;
    }

    .sidePanelDiv:hover {
        background: #1a53ff;
		cursor: pointer;
    }

.blueGreenGradient {
    background: url('src/images/bg_gradient.png');
    background-size: cover !important;
    background-position: bottom-left;
    background-repeat: no-repeat !important;
    /*background-attachment: fixed !important;*/
    background: #3366ff;
}

.whiteGreyGradient {
    background: url('src/images/wg_gradient.png');
    background-size: cover !important;
    background-position: bottom-left;
    background-repeat: no-repeat !important;
}

.pink {
    background-color: pink;
}

.black {
    background-color: black;
}

.fullWidthContainer {
    float: left;
    width: 100%;
}

.threeQuarterWidth {
    height: 100%;
    width: 70%;
    float: left;
    line-height: 50px;
    text-align: center;
}

.quarterWidth {
    float: left;
    height: 100%;
    width: 15%;
    text-align: center;
    line-height: 50px;
}

.quarterWidth:hover{
    cursor: pointer;
}

    .quarterWidth i {
        color: #666;
        font-size: 1.5rem;
    }

.headingHeight {
    height: 50px;
}

.greyBackground {
    background: #f2f2f2;
    color: #ffffff;
}

.orangeBackground {
    background: #ff9900;
    color: #ffffff;
}

.thirtyThree {
    width: calc(33.20% - 1px);
}

.blockWidth {
    width: 14.255%;
    float: left;
    text-align: center;
    font-size: 1.15em;
}

.dateCircleDiv {
    width: 32px;
    height: 32px;
    line-height: 32px;
    margin: 0 auto;
    border-radius: 50%;
    background: #ccc;
    color: #666;
    position: relative;
    top: 12px;
}

.dateCircleDiv:hover {
 cursor: pointer;
 animation: pulse 2s infinite;
}

.dateToday {
    background: orange !important;
    color: #f2f2f2 !important;
}

.highlightDate {
    background-size: cover !important;
    background-repeat: no-repeat !important;
    color: #fff;
    background: #3366ff;
}

.dayHeadingHeightContainer {
    height: 40px;
}

.dayHeadingHeight {
    line-height: 40px;
}

.dateBlockHeight {
    color: #ffffff;
    height: 56px;
}

.panelHeadingContainer {
    width: calc(100% - 20px);
    margin: 0 auto;
    height: 40px;
    position: relative;
    top: 10px;
}

    .panelHeadingContainer span {
        border-left: 4px solid #3366ff;
        font-size: 1.28em;
    }

.overflowHidden {
    overflow: hidden;
}

.panelMainContainer {
    width: calc(100% - 20px);
    margin: 0 auto;
    height: 390px;
    position: relative;
    top: 10px;
    overflow-y: auto;
}

.panelMainContainer .taskCard{
	margin-bottom: 35px !important;
	border: 1px solid #f2f2f2;
}

.taskBox {
    height: 200px;
    border-left: 4px solid #666;
    width: calc(100% - 4px);
    -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.15);
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.15);
    margin-bottom: 20px;
}

.taskBox__top {
    height: 50px;
}

    .taskBox__top span {
        padding-left: 15px;
    }

.taskBox__middle {
    height: 100px;
}

    .taskBox__middle p {
        padding-left: 15px;
    }

.taskBox__bottom {
    height: 50px;
    background: #f2f2f2;
}

.oneThird {
    width: 33.3322%;
    line-height: 50px;
}

    .oneThird i {
        font-size: 1.49em;
    }

    .oneThird span {
        padding-left: 15px;
    }

.verySmallCircle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: purple;
    position: relative;
    top: 5px;
}

.twoThirds {
    width: 50%;
    line-height: 50px;
}

.uppercase {
    text-transform: uppercase;
}

.spaceLetters {
    letter-spacing: 1px;
}

.whiteText{
	color: #fff !important;
}

.absolute {
    position: absolute;
}

.center {
    text-align: center;
}

.projectStatusHeading h1{
	font-size: 1.03em;
}

.std-btn {
    background: #3366ff;
    color: #ffffff;
    border: none;
    border-radius: 3px;
    text-transform: uppercase;
    font-size: 0.85em;
    padding: 5px 7px 5px 7px;
    outline: 0;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.25);
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.25);
    -webkit-transition: all 0.45s ease-out;
    -moz-transition: all 0.45s ease-out;
    -ms-transition: all 0.45s ease-out;
    -o-transition: all 0.45s ease-out;
    transition: all 0.45s ease-out;
}

    .std-btn:hover {
        cursor: pointer;
        -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.45);
        -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.45);
        box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.45);
       /* margin-bottom: 20px; */
    }

.stopTimer {
    background: #800000 !important;
}

.startTimer {
    background: #00b3b3 !important;
}

.large-btn {
    padding: 6px 12px 6px 12px;
    font-size: 1.15em;
}

.medium-btn {
    padding: 5px 10px 5px 10px;
    font-size: 0.95em;
}

.clockBlock {
    width: 180px;
    text-align: center;
}

    .clockBlock i {
        position: relative;
        top: 15px;
        font-size: 7.1em;
    }

    .clockBlock span {
        position: relative;
        top: 22px;
        font-size: 0.74em;
    }

.timerBlock__layer {
    height: 53px;
    line-height: 53px;
}

.timerBlockContainer {
    width: calc(100% - 180px);
}

.darkOverlayContainer {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
    z-index: 999;
}

.closeOverlay {
    top: 15px;
    right: 15px;
	color: #fff;
    font-size: 2.75em;
}

.closeOverlay:hover{
	cursor: pointer;
}

.modalContainer {
    width: calc(100% - 150px);
    margin: 0 auto;
    height: calc(100% - 200px);
    background: #fff;
    border-radius: 8px;
    position: relative;
    top: 75px;
}


.modalContainer__heading {
    background: #f2f2f2;
    color: #666;
    height: 50px;
    border-radius: 8px 8px 0px 0px;
    -moz-border-radius: 8px 8px 0px 0px;
    -webkit-border-radius: 8px 8px 0px 0px;
}

.modalContainer__main {
    height: 100%;
    overflow-y: auto;
    border-radius: 0px 0px 8px 8px;
    -moz-border-radius: 0px 0px 8px 8px;
    -webkit-border-radius: 0px 0px 8px 8px;
}

.modalCellBlock {
    line-height: 50px;
    width: 16.6611%;
}

.heightAuto {
    height: auto;
}

.chooseTask i {
    color: #3366ff;
    font-size: 1.83em;
}

.chooseTask i:hover {
    cursor: pointer;
   -moz-box-shadow: 0 0 0 0 rgba(102, 102, 102, 0.7);
   box-shadow: 0 0 0 0 rgba(102, 102, 102, 0.7);
}

.greyBottomBorder {
    border-bottom: 1px solid #ccc;
}

.projectSearch {
    padding-top: 12px;
    padding-bottom: 12px;
    width: 95%;
    border: none;
	outline: 0;
}

.clockBackground::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    top: 25px;
    left: 7px;
    border-radius: 50%;
    animation: pulse 1s infinite;
}

@-webkit-keyframes pulse {
    0% {
        -webkit-box-shadow: 0 0 0 10px rgba(102, 102, 102, 0.7);
    }

    70% {
        -webkit-box-shadow: 0 0 0 25px rgba(102, 102, 102, 0.2);
    }

    100% {
        -webkit-box-shadow: 0 0 0 10px rgba(102, 102, 102, 0.2);
    }
}

@keyframes pulse {
   0% {
        -webkit-box-shadow: 0 0 0 10px rgba(102, 102, 102, 0.7);
    }

    70% {
        -webkit-box-shadow: 0 0 0 25px rgba(102, 102, 102, 0.2);
    }

    100% {
        -webkit-box-shadow: 0 0 0 10px rgba(102, 102, 102, 0.2);
    }
}


.cardContainer{
	height: 500px;
	overflow-y: auto;
}

.taskCard{
	width: calc(100% - 10px);
	margin: 0 auto;
	margin-top:5px;
	margin-bottom:5px;
	border-radius: 3px;
	height: 200px;
	-webkit-box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.25);
	-moz-box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.25);
	box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.25);
}

.taskCard:hover{
	cursor: pointer;
	-webkit-box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.45);
	-moz-box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.45);
	box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.45);
}

.taskCard__top{
	height: 40px;
	line-height: 40px;
	background: white;
}

.taskCard__top span{
	padding-left: 15px;
}

.taskCard__middle{
	height: 120px;
	background: #9999ff;
	color: #fff !important;
}

.taskCard__middle p{
	padding-left: 15px;
}

.taskCard__bottom{
	height: 40px;
	line-height: 40px;
	background: #f2f2f2;
}

.taskCard__bottom .halfWidth{
	text-align: center;
}

.curvedTopCorners{
	-webkit-border-top-left-radius: 3px;
-webkit-border-top-right-radius: 3px;
-moz-border-radius-topleft: 3px;
-moz-border-radius-topright: 3px;
border-top-left-radius: 3px;
border-top-right-radius: 3px;
}

.curvedCorners{
	-webkit-border-radius: 3px;
-moz-border-radius: 3px;
border-radius: 3px;
}

.oneThirdCard{
	width: 33.333%;
}

.topBoard{
	height: 50px;
}

.whiteBackground{
	background: #ffffff;
}

.boxShadow{
	-webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.15);
	-moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.15);
	box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.15);
}

.boxShadowG{
	-webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
	-moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
	box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
}

.inProgress{
	background: rgba(153, 0, 77, 0.5);
}

.inProgressHeading{
	background: rgba(153, 0, 77, 1);
	line-height: 30px;
}

.internalApproval{
	background: rgba(255, 153, 51, 0.5);
}

.internalApprovalHeading{
	background: rgba(255, 153, 51, 1);
	line-height: 30px;
}

.finalApproval{
	background: rgba(0, 204, 153, 0.5);
}

.finalApprovalHeading{
	background: rgba(0, 204, 153, 1);
	line-height: 30px;
}

.fullWidthContainer2{
	width: 100%;
	margin: 0 auto;
	background: #fff;
	height: calc(100% - 20px);
	position: relative;
	top: 10px;
	border-radius: 8px;
}

.updateContainer{
	position: relative;
	padding-top: 15px;
	padding-bottom: 15px;
	text-align: right;
}

.shiftLeft{
	position: relative;
	right: 20px;
}

.employeeSideContainer{
	position: absolute;
	/* right: -300px;*/
	right: 0; 
	top: 50px;
	background: #fff;
	border-left: 1px solid #ccc;
	width: 300px;
	height: 700px;
	overflow-y: auto;
	z-index: 999;
}

			
.emp__container{
	height: 75px;
	border-bottom: 1px solid #f2f2f2;
}
			
.emp__container_avatar{
	width: 90px;
}
			
.emp__container_username{
	width: calc(100% - 90px);
	line-height: 75px;
}
			
.avatar_circle{
	width: 60px;
	height: 60px;
	border-radius: 50%;
	margin: 0 auto;
	position: relative;
	border: 1px solid #ccc;
	top: 7px;
	background-size: cover !important;
	background-position: center center;
	background-repeat: no-repeat !important;
	 background: url('src/images/guy.png');
}
			
.onlineStatus{
	width:15px;
	height:15px;
	background: #00cc66;
	border-radius: 50%;
	float:right;
	position: relative;
	top: 40px;
	left: 5px;
}

.tooltip {
    position: relative;
    display: inline-block;
}

.tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;

    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    top: -5px;
    left: 105%;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
}

.topNavigation__left{
	width: 300px;
}
			
.topNavigation__center{
	width: calc(100% - 550px);
}
			
.topNavigation__right{
	width: 250px;
}
			
.topNavigation_avatar_container{
	width: 70px;
}
			
.profile_avatar{
	width: 40px;
	height: 40px;
	margin: 0 auto;
	position: relative;
	top: 5px;
	background: #f2f2f2;
	background: url('src/images/guy.png');
	background-size: cover !important;
	background-position: center center;
	background-repeat: no-repeat !important;
	border-radius: 50%;
	border-radius: 1px solid #ccc;
}
			
.topNavigation_name_container{
	width: 130px;
	line-height: 50px;
}
			
.topNavigation_name_container span{
	padding-left: 7px;
}
			
.topNavigation_menu_container{
	width: 40px;
	line-height: 50px;
}
			
.topNavigation_menu_container:hover{
	cursor: pointer;
}
			
.topNavigation_menu_container i{
	font-size: 1.84em;
}

.greaterHeight{
	height: 240px !important;
}

.clientAndProjectName_container{
	width: calc(100% - 50px);
}

.clientAndProjectName{
	padding-left: 15px;
}	

.viewProject__oneThird{
	height: calc(100% - 50px);
	overflow-y: auto;
}

.viewProject__oneThird_container{
	width: calc(100% - 30px);
	margin: 0 auto;
}

.viewProject__oneThird_icon_container div{
	width: calc(100% - 20px);
	background: #3366ff;
	padding-top: 3px;
	padding-bottom: 3px;
	border-radius: 12px;
	color: #ffffff;
	text-align: center;
}

.greenBtn{
	background: #00b3b3 !important;
}

.viewProject__oneThird_icon_container i{
	font-size: 1.13em;
	position: relative;
	left: -25px;
	color: #ffffff;
}

.viewProject__oneThird_icon_container span{
	font-size: 1.03em;
}

.viewProject__projectLead_avatar_container{
	height: 130px;
}

.viewProject__projectLead_avatar{
	width: 90px;
	height: 90px;
	border-radius: 50%;
	border: 2px solid #ccc;
	position: relative;
	top: 20px;
	background: #666;
	background-size: cover !important;
	background-position: center center;
	background-repeat: no-repeat !important;
}

.paddingTop{
	padding-top: 15px !important;
}

.paddingBottom{
	padding-bottom: 15px !important;
}

.viewProject__projectLead_name_container{
	height: 130px;
	line-height: 130px;
}

.lightGrayBackground{
	background: #e6e6e6 !important;
}

.projectTimedContainer{
	padding-top: 20px;
	/* padding-bottom: 20px;*/
}

.assignedTaskMember_container{
	padding: 6px 7px 6px 7px;
	margin-right: 10px;
	margin-bottom: 6px;
	border-radius: 12px;
}

.tMc{
	margin-bottom: 50px;
}

.projectActionContainer{
	height: 110px;
	border-bottom: 1px solid #fff;
}

.projectCommentContainer{
	height: auto;
	border-bottom: 1px solid #fff;
	margin-bottom: 5px;
}

.projectActionContainer_avatar_container{
	width: 100px;
}

.projectActionContainer_avatar{
	border-radius: 50%;
	width: 70px;
	height: 70px;
	margin: 0 auto;
	border: 2px solid #ccc;
	position: relative;
	top: 10px;
	background-size: cover !important;
	background-position: center center;
	background-repeat: no-repeat !important;
}

.projectActionContainer_action_taken_container{
	width: calc(100% - 100px);
}

.projectActionContainer_action_taken:before{
	content: url('src/images/left-arrow.png');
	position: absolute;
	left: -12px;
	top: 20px;
}

.projectActionContainer_action_taken2:before{
	content: url('src/images/left-arrow2.png');
	position: absolute;
	left: -12px;
	top: 20px;
}

.projectActionContainer_action_taken2 p, .projectActionContainer_action_taken p{
	width: calc(100% - 20px);
	margin: 0 auto;
	font-size: 0.89em;
	padding-top: 10px;
	padding-bottom: 10px;
}

.projectActionContainer_action_taken span{
	padding-left: 20px;font-size: 0.79em; margin-bottom: 10px;
	width: 100%; float: left;
}

 .projectActionContainer_action_taken2 span{
	padding-left: 20px; margin-bottom: 10px; font-size: 0.79em;
	width: 100%; float: left;
}

.projectActionContainer_action_taken, .projectActionContainer_action_taken2{
	background: white;
	width: calc(100% - 20px);
	border-radius: 3px;
	position: relative;
	top: 15px;
	margin: 0 auto;
	height: calc(100% - 30px);
}

.assignedTaskMember_container i{
	font-size: 1.35em;
	cursor: pointer;
}

.projectStatusCircle_container{
	width: 50px;
}

.projectStatusCircle{
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background: #e6e6e6;
	margin: 0 auto;
	border: 1px solid #ccc;
	position: relative;
	top: 10px;
}

.assignedTaskMember{
	font-size: 1.09em;
}

.addCommentBtn{
	background: #3366ff;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	text-align: center;
	position: absolute;
	bottom: 15px;
	right: 15px;
	cursor: pointer;
}

.addCommentBtn i{
	color: #ffffff;
	font-size: 1.19em;
	position: relative;
	top: 12px;
}

.commentForm{
	width: calc(100% - 35px);
	margin: 0 auto;
	margin-top: 10px;
	
}

.commentInput{
	border-radius: 3px;
	border: 1px solid #e6e6e6;
	font-family: 'Montserrat', sans-serif;
	background: #e6e6e6;
	color: #666;
	outline: 0;
	width: 100%;
}

.commentForm_btn_container{
	height: auto;
	padding-top:5px;
	padding-bottom:5px;
	margin-bottom: 10px;
}
`;
