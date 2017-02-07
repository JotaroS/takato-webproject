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
    if(this.props.bldg=='bld-1')tktData = require('dsv-loader!../data/KAWASAKI/Carbonation_K_new.csv');
    if(this.props.bldg=='bld-2')tktData = require('dsv-loader!../data/AMA/Carbonation_A_new.csv');
    if(this.props.bldg=='bld-3')tktData = require('dsv-loader!../data/Hokkaido/Carbonation_H_new.csv');        
    if(!this.state.isRendered){
          tktData.forEach(function(d){
            d.T = +d.T
            d.Suggested = +d.Suggested;//devided by million
            d.Genjyo = +d.Genjyo;      
       });
    }
    return tktData
  }
  
  render(){
    const xticks = [0,50,100,150,200];
    var crit;

    if(this.props.bldg=='bld-1')crit = 11;
    if(this.props.bldg=='bld-3')crit = 13;
    const CustomizedAxisTick = React.createClass({
      render () {
        const {x, y, stroke, payload} = this.props;
        
        return (
          <g transform={`translate(${x},${y})`}>
            <text x={10} y={0} dy={16} textAnchor="start" fill="#666"　stroke ="red" strokeWidth = {0.5}>現状:{crit}年後は修繕不可</text>
          </g>
        );
      }
    });
    if(this.props.disp == true){
      var tktData = this.changeData();
      return( 
        <div>
      　　<hr/>
          <center><h6>中性化予測による劣化程度の比較 (中性化深さ[mm] / 年)</h6></center>
          <ResponsiveContainer width="100%" height={320}>
              <LineChart data={tktData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <Line  dataKey="Genjyo" name = "最適化なし（現状継続）"stroke="#41ACA9" dot={false} strokeWidth={2}/>
                <Line  dataKey="Suggested" name = "最適化あり（CoRPOプラン）" stroke="#E69973" dot={false} strokeWidth={2}/>
                <CartesianGrid stroke = "#ccc" />
                <Legend/>
                <ReferenceLine x={crit} stroke="red" viewBox={{x: 100, y: 10, width: 200, height: 30}} label={<CustomizedAxisTick />} />

                <XAxis　datakey = "T" unit="T" ticks={xticks}/>
                <YAxis tickCount={10} />
              </LineChart>
          </ResponsiveContainer>
      </div>
    );
  }
  else return(<div/>);
  }
}
