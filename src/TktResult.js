import React from "react";
import ReactDom from 'react-dom';
import TktGraph from './TktGraph';
import TktNeutralGraph from './TktNeutralGraph';
import Loading from "react-loading-animation";
import TktWarning from "./TktWarning"
import TktIzumiRiskEstimator from "./TktIzumiRiskEstimator";
import TktSuggestionSelector from "./TktSuggestionSelector";
export default class TktResult extends React.Component {
  constructor() {
    super();
    this.state= {
      criticalYear:"default",
    }
  }
  render(){
    if(this.props.disp==true)
    return(
    <div className="col-xs-12">
       <TktGraph bldg = {this.props.bldg} disp={this.props.disp}/>
       <br/>
       <TktWarning bldg={this.props.bldg} />
       <hr/>
       <p>現状手法のままでは，積立金が0円を下回ってしまい...................てしまいます．</p>
       <TktNeutralGraph bldg = {this.props.bldg} disp={this.props.disp}/>
       <hr/>
       <TktIzumiRiskEstimator bldg={this.props.bldg} disp={this.props.disp}/>
       <TktSuggestionSelector disp={this.props.disp}/>
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
