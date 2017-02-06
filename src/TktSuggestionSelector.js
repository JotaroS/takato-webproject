import React from "react";
import ReactDom from 'react-dom';
import TktSuggestion from './TktSuggestion';
export default class TktIzumiRiskEstimator  extends React.Component {
  constructor() {
    super();
    this.state= {
      isRendered:false,
      isClicked:false,
      suggestion:"default",
    }
    this.handleClicked = this.handleClicked.bind(this);
  }

  handleClicked(event){
    if(event.target.value=='genjyo'){
      this.setState({isClicked:true});
      this.setState({suggestion:"genjyo"});
    }
    if(event.target.value=='suggested'){
      this.setState({isClicked:true});
      this.setState({suggestion:"suggested"});
    }
  }
  render(){
      if(this.props.disp == true){
      return( 
        <div className="col-xs-12">
        <h4>物件修繕工法</h4>
           <div className="col-xs-4">
              <button type="button" className="btn btn-secondary" value="genjyo" onClick={(event)=>{this.handleClicked(event);this.props.handleSelect(event);}}>現状手法の工法リスト</button>
           </div>
           <div className="col-xs-4"></div>
           <div className="col-xs-4">
              <button type="button" className="btn btn-success" value="suggested" onClick={(event)=>{this.handleClicked(event);this.props.handleSelect(event);}}>提案手法の工法リスト</button>
           </div>
           <br/><br/>
           
           <TktSuggestion suggestion={this.state.suggestion} disp = {this.state.isClicked}/>
        </div>
    );
  }
  else return(<div/>);
  }
}
