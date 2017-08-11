import React from 'react';
import { connect } from 'react-redux';
import { getWorkInProgressLast3Months, getInvoicedLast3Months, getCollectedLast3Months } from './actions';
import ChartSummary from '../../components/ChartSummary';

class GraphInformation extends React.Component{
	
	constructor(props){
		super(props);
	}
	
	componentWillMount(){
		this.props.getWorkInProgressLast3Months();
		this.props.getInvoicedLast3Months();
		this.props.getCollectedLast3Months();
	}

	render(){
		
		let workInProgressChartData = '';
		let invoicedChartData = '';
		let collectedChartData = '';
		
		if(this.props.loadingWorkInProgressCharts){
			//still loading
			workInProgressChartData = this.props.workInProgressChartData;
		}else{
			workInProgressChartData = this.props.workInProgressChartData[0];
		}
		
		if(this.props.loadingInvoicedCharts){
			//still loading
			invoicedChartData = this.props.invoicedChartData;
		}else{
			invoicedChartData = this.props.invoicedChartData[0];
		}
		
		if(this.props.loadingCollectedCharts){
			//still loading
			collectedChartData = this.props.collectedChartData;
		}else{
			collectedChartData = this.props.collectedChartData[0];
		}
		
		return(
			<div className="floatLeft fullWidth dashboardMiddle">
				<ChartSummary heading={"Work In Progress"} chartData={workInProgressChartData} />
				<ChartSummary heading={"Invoiced"} chartData={workInProgressChartData} />
				<ChartSummary heading={"Collected"} chartData={workInProgressChartData} />			
			</div>
		);
	}
	
}

const mapStateToProps = (state) => {
	state = state.toJS()
	return {
		loadingWorkInProgressCharts: state.graphInformation.loadingWorkInProgressCharts,
		loadingInvoicedCharts: state.graphInformation.loadingInvoicedCharts,
		loadingCollectedCharts: state.graphInformation.loadingCollectedCharts,
		workInProgressChartData: state.graphInformation.workInProgressChartData,
		invoicedChartData: state.graphInformation.invoicedChartData,
		collectedChartData: state.graphInformation.collectedChartData,
		invoiceError: state.graphInformation.invoiceError,
		workInProgressError: state.graphInformation.workInProgressError,
		collectedError: state.graphInformation.collectedError
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		getWorkInProgressLast3Months: () => {
			dispatch(getWorkInProgressLast3Months());
		},
		getInvoicedLast3Months: () => {
			dispatch(getInvoicedLast3Months());
		},
		getCollectedLast3Months: () => {
			dispatch(getCollectedLast3Months());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GraphInformation);