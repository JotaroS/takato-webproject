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
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(event){
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
        <div>
           <div className="col-xs-4">
              <button type="button" className="btn btn-secondary" value="genjyo" onClick={this.handleSelect}>現状手法の工法リスト</button>
           </div>
           <div className="col-xs-4"></div>
           <div className="col-xs-4">
              <button type="button" className="btn btn-success" value="suggested" onClick={this.handleSelect}>提案手法の工法リスト</button>
           </div>
           <hr/><hr/><hr/>
           <TktSuggestion suggestion={this.state.suggestion} disp = {this.state.isClicked}/>
        </div>
    );
  }
  else return(<div/>);
  }
}
