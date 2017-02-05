import React from "react";
import ReactDom from 'react-dom';
import {LineChart,Line,CartesianGrid,Legend,CartesianAxis,XAxis,YAxis,ResponsiveContainer} from 'recharts';

export default class TktGraph extends React.Component {
  constructor() {
    super();
    this.state= {
      isRendered:false,
    }
    
  }

  changeData(){
    var tktData;
    if(this.props.bldg=='bld-1')tktData = require('dsv!../data/KAWASAKI/genjyo_list_K.csv');
    if(this.props.bldg=='bld-2')tktData = require('dsv!../data/AMA/genjyo_list_A.csv');
    if(this.props.bldg=='bld-3')tktData = require('dsv!../data/Hokkaido/genjyo_list_H.csv');        
    if(!this.state.isRendered){
          tktData.forEach(function(d){
            d.suggested = +d.suggested/1000000;//devided by million
            d.genjyo = +d.genjyo/1000000;      
       });
    }
    return tktData
  }
  render(){
   
    if(this.props.disp == true){
      var tktData = this.changeData();
      return( 
        <div>
      　　<hr/>
          <center><h6>積立金の推移グラフ (百万円 / 年)</h6></center>
          <ResponsiveContainer width="100%" height={320}>
              <LineChart data={tktData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <Line  dataKey="genjyo" name = "最適化なし（現状手法）"stroke="#82ca9d" dot={false} strokeWidth={2}/>
                <Line  dataKey="suggested" name = "最適化あり（提案手法）" stroke="#00ca9d" dot={false} strokeWidth={2}/>
                <CartesianGrid stroke = "#ccc" />
                <Legend/>
                <XAxis　datakey = "year" tickCount={10} unit="Year"/>
                <YAxis tickCount={10}/>
              </LineChart>
          </ResponsiveContainer>
      </div>
    );
  }
  else return(<div/>);
  }
}
