import React from 'react';
import { connect } from 'react-redux';
import {Bar, Line} from 'react-chartjs-2';
import { getChartData } from './actions';

class DashboardChart extends React.Component{

    constructor(props){
		super(props);
		this.state = {
			chartData:{
				labels: ['Jan', 'Feb ', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
				datasets: [{
					label: 'Tasks', 
					data: ["0","0","0","0","0","0","0","0","0","0","0","0"], 
					backgroundColor:'#3366ff',
					borderWidth: 1, 
					borderColor: '#ccc', 
					hoverBorderWidth: 2,
					hoverBorderColor: '#666'
				}]
			}				
		};
	}

    componentDidMount(){
        this.props.getChartData(this.props.userID);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.chartData !== null && Array.isArray(nextProps.chartData) && nextProps.chartData[0] !== undefined){ 
            this.setState({				
                 chartData:{
                    labels: ['Jan', 'Feb ', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [{
                    label: 'Tasks', 
                    data: nextProps.chartData[0], 
                    backgroundColor:'#3366ff',
                    borderWidth: 1, 
                    borderColor: '#ccc', 
                    hoverBorderWidth: 2,
                    hoverBorderColor: '#666'
                    }]
                }			
            })
        }
    }

    render(){

        return(
            <div className="floatLeft thirtyThree fullHeight">
                <Line
					data={this.state.chartData}
					options={{
						title:{
						display: true, 
						text: 'PROJECTS PER MONTH'
						},
						legend:{
							display: false,
							position: 'right',
							labels:{
								fontColor: '#000'
							}
						}
					}}
				/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    state = state.toJS()
    return{
        userID: state.userInformation.userID,
        chartData: state.dashboardChart.chartData
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getChartData: (userID) => {
            dispatch(getChartData(userID));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardChart);