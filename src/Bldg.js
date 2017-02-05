import React from "react";
import ReactDom from 'react-dom';

export default class Bldg extends React.Component {
  constructor() {
    super();
    this.state = {
      addr:"",
      year:"",
      floor:"",
      area:"",
      structure:"",
      finish:"",
    };
    this.changeTitle = this.changeTitle.bind(this);
  }

  changeTitle(title) {
    this.setState({title});
  }
  render() {
    var bldg = 0;
    var blddef = {
      name:"",
      addr:"",
      year:"",
      floor:"",
      area:"",
      structure:"",
      finish:"",
    }
    var bld1 = {
      name:"ルヴェソンヴェール川崎",
      addr:"神奈川県川崎市",
      year:"2012",
      floor:"5",
      area:"6104",
      structure:"鉄筋コンクリート造",
      finish:"タイル仕上",
    }
    var bld2 = {
      name:"ボナール尼崎",
      addr:"兵庫県尼崎市",
      year:"1986",
      floor:"5",
      area:"3632",
      structure:"鉄筋コンクリート造",
      finish:"塗装仕上",
    }
    var bld3 = {
      name:"ラフィネ札幌",
      addr:"北海道札幌市",
      year:"2014",
      floor:"5",
      area:"1000",
      structure:"鉄筋コンクリート造",
      finish:"コンクリート打放し仕上",
    }
    if(this.props.bldg == "bld-1")bldg = bld1;
    if(this.props.bldg == "bld-2")bldg = bld2;
    if(this.props.bldg == "bld-3")bldg = bld3;
    if(this.props.bldg != "default"){
    return (
        <div className = "col-xs-6">
          <h5>物件名:{bldg.name}</h5>
          所在地：{bldg.addr} <br/>
          竣工：{bldg.year} <br/>
          階数：{bldg.floor} <br/>
          延床面積：{bldg.area} <br/>
          主体構造：{bldg.structure}  <br/>      
          仕上げ：{bldg.finish} <br/>
        </div>
      );
    }
    else {
      return(<div></div>)
    }
  }
}
  