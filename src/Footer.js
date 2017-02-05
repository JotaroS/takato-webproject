import React from "react";
import ReactDom from 'react-dom';

export default class Footer  extends React.Component {
  constructor() {
    super();
    this.state= {
    }
  }


  render(){
    if(this.props.disp==true){
    return(
      <footer>
      </footer>
      );
  }
  else return(<div/>);
  }
}
