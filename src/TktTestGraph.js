import React from "react";
import ReactDom from 'react-dom';


export default class TktNeutralGraph extends React.Component {
  constructor() {
    super();
  }

  changeData(){
  }
  render(){
      if(this.props.disp == true){
      return( 
        <div>
        awefoiajweofijaoweifj
      </div>
    );
  }
  else return(<div/>);
  }
}
