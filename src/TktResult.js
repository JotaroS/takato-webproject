import React from "react";
import ReactDom from 'react-dom';
import TktGraph from './TktGraph';
import TktNeutralGraph from './TktNeutralGraph';
import Loading from "react-loading-animation";
import TktWarning from "./TktWarning";
import TktRepairPlan from "./TktRepairPlan";
import TktIzumiRiskEstimator from "./TktIzumiRiskEstimator";
import TktSuggestionSelector from "./TktSuggestionSelector";
import TktBldgManagerPlan from "./TktBldgManagerPlan";
import Footer from "./Footer";
export default class TktResult extends React.Component {
  constructor() {
    super();
    this.state= {
      criticalYear:"default",
      isFooterDisplay:false,
    }
    this.handleSelect = this.handleSelect.bind(this)
  }
  handleSelect(){
    this.setState({
      isFooterDisplay:true
    });
  }
  render(){
    if(this.props.disp==true)
    return(
    <div className="col-md-12" >
       <TktGraph bldg = {this.props.bldg} disp={this.props.disp}/>
       <br/>
       <TktWarning bldg={this.props.bldg} />
       <hr/>
       <p>現状手法のままでは，積立金が0円を下回ってしまい...................てしまいます．</p>
       <TktNeutralGraph bldg = {this.props.bldg} disp={this.props.disp}/>
       <hr/>
       <TktIzumiRiskEstimator bldg={this.props.bldg} disp={this.props.disp}/>
      <hr/>
       <TktRepairPlan disp={this.props.disp} bldg={this.props.bldg} />
      <hr/>
        <TktBldgManagerPlan disp={this.props.disp} bldg={this.props.bldg} />
      <hr/>
       <TktSuggestionSelector disp={this.props.disp} handleSelect={this.handleSelect} />
       <hr/>
       <div className="col-md-12" style={{height:"20px"}} />
       <Footer disp={this.state.isFooterDisplay}/>
    </div> 
    );
  else if(this.props.loading == true){ return(
    <div>
      <hr />
      <Loading />
    </div>
  );}

  else return(<div/>);
  }
}
