import React from "react";
import ReactDom from 'react-dom';
import JsonTable from 'react-json-table';

export default class TktBldgManagerPlan extends React.Component {
  constructor() {
    super();
    this.state= {
      manager_on_holidays:[],
      cleaness:[],
      manager_on_week:[],
      manager_on_holidays_crit:1,
      manager_on_week_crit:1, 
    }
    this.getSettings = this.getSettings.bind(this);
    this.processJson = this.processJson.bind(this);

  } 
  getSettings(){
    return{
      noRowsMessage(){
        return "該当はありません";
      }
    };
  }
  processJson(){
    var items=require('dsv-loader!../data/KAWASAKI/df1_K.csv');
    var items;
    var target=[];
    var cleaness=[];
    var week=[];
    var str = "";
    if(this.props.bldg=='bld-1'){
      items = require('dsv-loader!../data/KAWASAKI/df1_K.csv');
      this.setState({manager_on_holidays_crit:1});
      this.setState({manager_on_week_crit:1});
      week.push({"不足人数[人]":"不足年次なし"});      
    }
    if(this.props.bldg=='bld-2'){
      items = require('dsv-loader!../data/AMA/df1_A.csv');
       this.setState({manager_on_holidays_crit:1});
      this.setState({manager_on_week_crit:1});  
       week.push({"不足人数[人]":"不足年次なし"});


    }
    if(this.props.bldg=='bld-3'){
      items = require('dsv-loader!../data/Hokkaido/df1_H.csv');
      this.setState({manager_on_holidays_crit:1});
      this.setState({manager_on_week_crit:1});      

    }


    items.forEach((d)=>{
      if(d['manager_on_holidays']<1){
        //不足分を計算
        target.push({"年次":d['year'],"不足人数[人]":this.state.manager_on_holidays_crit-d['manager_on_holidays']});

      } 
      if(d['cleaning_rate'] < 0.9){
        var num = Math.round(100*(0.9-d['cleaning_rate']));
        cleaness.push({"年次":d['year'],"清掃面積比[%]":num});
      }
      if(d['manager_on_week']<1){
        week.push({"年次":d['year'],"不足人数[人]":this.state.manager_on_week_crit-d['manager_on_week']});
      }
    });
    this.setState({manager_on_holidays:target});
    this.setState({cleaness:cleaness});
    this.setState({manager_on_week:week});
    return ;
  }
  render(){
    if(this.props.disp==true){
      var i;
      // if(this.props.bldg=='bld-1')i = require('dsv-loader!../data/KAWASAKI/df2_K.csv');
      // if(this.props.bldg=='bld-2')i = require('dsv-loader!../data/AMA/df2_A.csv');
      // if(this.props.bldg=='bld-3')i = require('dsv-loader!../data/Hokkaido/df2_H.csv');
      return(
        <div className = 'col-xs-12'>
            <p><strong>次の管理費節約計画によって、清掃や警備等を自主的に行うことで持続可能な長期維持管理計画が実現する。</strong></p>
            <h4>管理費削減計画</h4>
            <p><small>※管理比較項目の単価は文献[1]により計算している。</small></p>
            <button type="button" className="btn btn-success" data-toggle="collapse" data-target="#bldgmngr" onClick={this.processJson} >
              ボタンを押して表示
            </button>
            <hr />
            <h5> 理想的な管理水準 </h5>
            <div id="bldgmngr" className="collapse">
              <div className='col-xs-4' > 
               <h6>休日出勤する管理人が不足する年次</h6>
               <spab className='label label-success'><strong>理想人数：{this.state.manager_on_holidays_crit}</strong></spab>
              <JsonTable className="table table-striped" rows={this.state.manager_on_holidays}/>
              </div>

              <div className='col-xs-4' >  
                <h6>週日出勤する管理人が不足する年次</h6>
               <spab className='label label-success'><strong>理想人数：{this.state.manager_on_week_crit}</strong></spab>
              <JsonTable settings={this.getSettings} className="table table-striped" rows={this.state.manager_on_week}/>
              </div>                           

              <div className='col-xs-4' >
              <h6>必要な共用部の清掃面積比</h6>
              <br />
              <spab className='label label-success'><strong>理想的な清掃面積:90%</strong></spab>
              <JsonTable className="table table-striped" rows={this.state.cleaness}/>
              </div>
            </div>  
            <div className = 'col-xs-12' style={{height:"30px"}}/>
            <hr/>
        </div>
        );
  }
  else return(<div/>);
  }
}
