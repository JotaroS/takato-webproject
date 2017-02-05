import React from "react";
import ReactDom from 'react-dom';
import JsonTable from 'react-json-table';
export default class TktRepairPlan extends React.Component {
  constructor() {
    super();
    this.state= {
    }
    this.handleChange=this.handleChange.bind(this);
    this.processJson = this.processJson.bind(this);
  }
  handleChange(){
    var i = require('dsv-loader!../data/AMA/df2_A.csv');
    this.setState({items:i});
  }
  processJson(i){
    var items=i;
    var target=[];
    items.forEach((d)=>{
      if(d['interior_repair'] == 1 || d['separated_repair']==1||d['facility']==1||d['etc']){        
        var year = d['year'];
        var str = ""
        if(d['interior_repair']==1 && d['separated_repair']==0)
          str+="大規模修繕工事・機械式駐車場修繕・エレベータ修繕(内装)　";
        if(d['separated_repair']==1)
          str+="大規模修繕工事・機械式駐車場修繕・エレベータ修繕(分割工事)　";
        if(d['facility']==1)
          str+="設備更新工事　";
        if(d['etc']==1)
          str+="その他工事"
        if(str!="")target.push({"年次":year,"修繕内容":str});
      }
    });
    return target;
  }
  render(){
    if(this.props.disp==true){
      var i;
      if(this.props.bldg=='bld-1')i = require('dsv-loader!../data/KAWASAKI/df2_K.csv');
      if(this.props.bldg=='bld-2')i = require('dsv-loader!../data/AMA/df2_A.csv');
      if(this.props.bldg=='bld-3')i = require('dsv-loader!../data/Hokkaido/df2_H.csv');
      var items= this.processJson(i);
      return(
        <div className = 'col-xs-12'>
            <h4>年次別修繕計画の提案</h4>
            <button type="button" className="btn btn-success" data-toggle="collapse" data-target="#demo">
              ボタンで開閉
            </button>
            <div id="demo" className="collapse">
              <JsonTable className="table table-striped" rows={items}/>
            </div>
            <div className = 'col-xs-12' style={{height:"30px"}}/>
            <hr/>
        </div>
        );
  }
  else return(<div/>);
  }
}
