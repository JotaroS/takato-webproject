import React from "react";
import ReactDom from 'react-dom';
import TktGraph from './TktGraph';
import TktNeutralGraph from './TktNeutralGraph';
import Loading from "react-loading-animation";
import TktWarning from "./TktWarning";
import TktRepairPlan from "./TktRepairPlan";
import TktReliabilityEstimator from "./TktReliabilityEstimator";
import TktIzumiRiskEstimator from "./TktIzumiRiskEstimator";
import TktSuggestionSelector from "./TktSuggestionSelector";
import TktBldgManagerPlan from "./TktBldgManagerPlan";
import TktTestGraph from "./TktTestGraph";
import TktMsg from "./TktMsg";
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
    var crit_year;
    var Message
    if(this.props.bldg=='bld-1')crit_year = 11;
    if(this.props.bldg=='bld-3')crit_year = 13;
    if(crit_year > 0){
      Message = React.createClass({
        render() {
          return (
            <div><p>現状の維持管理計画のままでは、{crit_year}年後に修繕積立金が不足し、その後の修繕を行うことができなくなる。
          そうなれば、構造物の本来有する耐久性のポテンシャルが大幅に奪われてしまう。
          長く「住まう」ためには、居住者らが適宜自主管理等を行うことで削減可能な管理費用を修繕費用に充てる必要がある。
          </p><hr /></div>
          );
        }
      });
    }else
    Message = React.createClass({
        render() {
          return (
            <div />
          );
        }
      });
    if(this.props.disp==true)
      return(
      <div className="col-md-12" >
         <TktGraph bldg = {this.props.bldg} disp={this.props.disp}/>
         <br/>
         <TktWarning bldg={this.props.bldg} />
         <hr/>
         <Message />
           <TktBldgManagerPlan disp={this.props.disp} bldg={this.props.bldg} />
           <TktNeutralGraph bldg = {this.props.bldg} disp={this.props.disp}/>
         <hr/>
           <TktIzumiRiskEstimator bldg={this.props.bldg} disp={this.props.disp}/>
        <hr/>
        <TktReliabilityEstimator disp={this.props.disp} />
        <hr />
         <TktRepairPlan disp={this.props.disp} bldg={this.props.bldg} />
        <hr/>
         <TktSuggestionSelector bldg={this.props.bldg} disp={this.props.disp} handleSelect={this.handleSelect} />

         <div className="col-md-12" style={{height:"20px"}} />
         
         <TktMsg disp={this.state.isFooterDisplay}/>
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
