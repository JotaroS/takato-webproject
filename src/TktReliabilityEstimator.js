import React from 'react';
import ReactDom from 'react-dom';

export default class TktReliabilityEstimator extends React.Component {
	constructor(){
		super();
	}
	render() {
		const img = "./img/probability_figure.png";
		if(this.props.disp==true)
		return (
			<div className='col-md-12'>
				<img src={img} width="100%" />
			</div>
		);
		else{
			return(<div />);
		}
	}
}