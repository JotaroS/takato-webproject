import React from "react";
import ReactDom from 'react-dom';
import {LineChart,Line,CartesianGrid,Legend,CartesianAxis,XAxis,YAxis,ResponsiveContainer} from 'recharts';

export default class TktNeutralGraph extends React.Component {
  constructor() {
    super();
    this.state= {
      isRendered:false,
      graph:"../img/Carbonation.png",
    }
  }

  changeData(){
  }
  render(){
      if(this.props.disp == true){
      return( 
        <div>
      　　<hr/>
          <center><h6>中性化予測による劣化程度の比較</h6></center>
          <img src={this.state.graph} width="100%"/>
      </div>
    );
  }
  else return(<div/>);
  }
}
