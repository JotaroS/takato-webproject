import React from "react";
import ReactDom from 'react-dom';
import {ReferenceLine, LineChart,Line,CartesianGrid,Legend,CartesianAxis,XAxis,YAxis,ResponsiveContainer} from 'recharts';

export default class TktNeutralGraph extends React.Component {
  constructor() {
    super();
    this.state= {
      isRendered:false,
      crit_year:11,
    }
  }

  changeData(){
    var tktData;
    if(this.props.bldg=='bld-1')tktData = require('dsv-loader!../data/KAWASAKI/genjyo_list_K.csv');
    if(this.props.bldg=='bld-2')tktData = require('dsv-loader!../data/AMA/genjyo_list_A.csv');
    if(this.props.bldg=='bld-3')tktData = require('dsv-loader!../data/Hokkaido/genjyo_list_H.csv');        
    if(!this.state.isRendered){
          tktData.forEach(function(d){
            d.suggested = +d.suggested;//devided by million
            d.genjyo = +d.genjyo;      
       });
    }
    return tktData
  }
  
  render(){
    const xticks = [0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200];
    var crit;
    if(this.props.bldg=='bld-1')crit = 11;
    if(this.props.bldg=='bld-3')crit = 13;
    if(this.props.disp == true){
      var tktData = this.changeData();
      return( 
        <div>
        </div>
    );
  }
  else return(<div/>);
  }
}
