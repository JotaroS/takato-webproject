import React from "react";
import ReactDom from 'react-dom';
export default class TktResult extends React.Component {
  constructor() {
    super();
    this.state= {
      criticalYear:"default",
    }
  }
  render(){
    if(this.props.bldg=="bld-1"){return(
	   <div className="alert alert-warning" role="alert">
	      <center><h5 className="warning" style={{color:"white"}}>現状手法のままでは<strong>あと11年</strong>で修繕積立金が不足します</h5></center>
	    </div>

    );}
    if(this.props.bldg=="bld-2"){return(
       <div className="alert alert-success" role="alert">
          <center><h5 className="success" style={{color:"white"}}>現状手法で修繕積立金が不足することはありません</h5></center>
        </div>
    );}
    if(this.props.bldg=="bld-3"){return(
       <div className="alert alert-warning" role="alert">
          <center><h5 className="warning" style={{color:"white"}}>現状手法のままでは<strong>あと13年</strong>で修繕積立金が不足します</h5></center>
        </div>

    );}
  }
}
