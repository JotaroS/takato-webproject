import React from "react";
import ReactDom from 'react-dom';
import {ReferenceLine, LineChart,Line,CartesianGrid,Legend,CartesianAxis,XAxis,YAxis,ResponsiveContainer} from 'recharts';

export default class TktGraph extends React.Component {
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
    if(this.props.disp == true || this.props.bldg!='bld-2'){
      var tktData = this.changeData();
      return( 
        <div>
      　　<hr/>
          <center><h6>修繕積立金の推移グラフ (百万円 / 年)</h6></center>
          <ResponsiveContainer width="100%" height={320}>
              <LineChart data={tktData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <Line  dataKey="genjyo" name = "最適化なし（現状継続）"stroke="#41ACA9" dot={false} strokeWidth={2}/>
                <Line  dataKey="suggested" name = "最適化あり（CoRPOプラン）" stroke="#E69973" dot={false} strokeWidth={2}/>
                <CartesianGrid stroke = "#ccc" />
                <Legend/>
                <XAxis　datakey = "year" unit="Year" ticks={xticks}/>
                <ReferenceLine x={crit} stroke="red" label="現状継続:不足" />
                <YAxis tickCount={10} />
              </LineChart>
          </ResponsiveContainer>
      </div>
    );
  }
  else if(this.props.disp == true){
      var tktData = this.changeData();
      return( 
        <div>
      　　<hr/>
          <center><h6>修繕積立金の推移グラフ (百万円 / 年)</h6></center>
          <ResponsiveContainer width="100%" height={320}>
              <LineChart data={tktData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <Line  dataKey="genjyo" name = "最適化なし（現状継続）"stroke="#41ACA9" dot={false} strokeWidth={2}/>
                <Line  dataKey="suggested" name = "最適化あり（CoRPOプラン）" stroke="#E69973" dot={false} strokeWidth={2}/>
                <CartesianGrid stroke = "#ccc" />
                <Legend/>
                <XAxis　datakey = "year" unit="Year" ticks={xticks}/>
                <YAxis tickCount={10} />
              </LineChart>
          </ResponsiveContainer>
      </div>
    );
  }
  else return(<div/>);
  }
}
