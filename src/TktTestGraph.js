import React from "react";
import ReactDom from 'react-dom';
import {ScatterChart, LineChart,Line,CartesianGrid,Legend,CartesianAxis,XAxis,YAxis,ResponsiveContainer,Tooltip,Scatter} from 'recharts';
export default class TktNeutralGraph extends React.Component {
  constructor() {
    super();
    this.state= {
      isRendered:false,
      data01:[],
    }
    
  }	

  changeData(){
    var tktData;
    var _data01=[];
    if(this.props.bldg=='bld-1')tktData = require('dsv-loader!../data/KAWASAKI/genjyo_list_K.csv');
    if(this.props.bldg=='bld-2')tktData = require('dsv-loader!../data/AMA/genjyo_list_A.csv');
    if(this.props.bldg=='bld-3')tktData = require('dsv-loader!../data/Hokkaido/genjyo_list_H.csv');        
    if(!this.state.isRendered){
          tktData.forEach(function(d){
            d.suggested = +d.suggested/1000000;//devided by million
            d.genjyo = +d.genjyo/1000000;      
           	_data01.push({x:d.suggested,y:d.year})
       });
    }
    return _data01
  }
  render(){
   
    if(this.props.disp == true){
      var tktData = this.changeData();
      tktData = [{x: 10, y: 30}, {x: 30, y: 200}, {x: 45, y: 100}, {x: 50, y: 400}, {x: 70, y: 150}, {x: 100, y: 250}];

      return( 
        <div>
      　　<hr/>
          <center><h6>修繕積立金の推移グラフ (百万円 / 年)</h6></center>
		  <ScatterChart width={600} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
	      	<XAxis dataKey={'x'} name='stature' unit='cm'/>
	      	<YAxis dataKey={'y'} name='weight' unit='kg'/>
	        <CartesianGrid />
	      	<Tooltip cursor={{strokeDasharray: '3 3'}}/>
	        <Legend/>
	      	<Scatter name='A school' data={tktData} fill='#8884d8' line scatter="none"/>
	      </ScatterChart>
      </div>
    );
  }
  else return(<div/>);
  }
}
