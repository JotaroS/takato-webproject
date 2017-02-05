import React from "react";
import ReactDom from 'react-dom';
import Bldg from "./Bldg"
import CalcButton from "./CalcButton"
// import Footer from "./Footer";
// import Header from "./Header";

export default class Layout extends React.Component {

  constructor() {
    super();
    this.changeTitle = this.changeTitle.bind(this);
  }

  changeTitle(title) {
    this.setState({title});
  }
  render() {
    if(this.props.disp === true)
      return (
        <div className  = "center-block">
          <center>
            <button type="button" className="btn btn-success" onClick={this.props.handleClick}>積立金と維持管理費のシミュレーション開始</button>
          </center>
        </div>
      );
    else
      return(<div></div>);  
  }
}
