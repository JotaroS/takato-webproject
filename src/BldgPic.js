import React from "react";
import ReactDom from 'react-dom';
// import Footer from "./Footer";
// import Header from "./Header";

export default class BldgPic extends React.Component {
  constructor() {
    super();
  }
  render() {
    if(this.props.bldg != "default"){
      return (
        <div className  = "col-xs-6">
          <img src={this.props.Pic} width="100%" />
        </div>
      );
    }
    else 
        return(<div />);
  }
}
