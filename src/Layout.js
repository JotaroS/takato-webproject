
import React from "react";
import ReactDom from 'react-dom';
import Bldg from "./Bldg";
import CalcButton from "./CalcButton";
import BldgPic from "./BldgPic";
import TktGraph from "./TktGraph";
import TktResult from "./TktResult";
import Footer from "./Footer";
import CSSTransitionGroup from 'react-addons-css-transition-group' // ES6


export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
      building:"default",
      isBldSelected:false,
      isClicked:false,
      isLoadingDisplay:false,
      isResultDisplay:false,      
      Pic:"default",
    };
    this.changeTitle = this.changeTitle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleLoading = this.handleLoading.bind(this);
     }
  changeTitle(title) {
    this.setState({title});
  }
  handleChange(event){
    this.setState({building:event.target.value});

    if(event.target.value == 'default'){
      this.setState({isBldSelected:false});
      this.setState({isClicked:false});
      this.setState({isResultDisplay:false});
      this.setState({isLoadingDisplay:false});
    }
    else this.setState({isBldSelected:true});

    if(event.target.value == "bld-1")this.setState({Pic:"../img/sample1.jpg"});
    if(event.target.value == "bld-2")this.setState({Pic:"../img/sample2.jpeg"});
    if(event.target.value == "bld-3")this.setState({Pic:"../img/sample3.jpg"});
    return;
  }
  handleLoading(){
    this.setState({isResultDisplay:true});
  }
  handleClick(){
    this.setState({isClicked:true});
    this.setState({isResultDisplay:false});
    this.setState({isLoadingDisplay:true});
    setTimeout(function(){
      this.handleLoading();
    }.bind(this),150);
  }
  render() {
    return (
      <div className = "col-md-12">
        <div className="form-group">
          <label >物件の諸元:</label>
          <select className="form-control" value={this.state.building}  onChange={this.handleChange}>
            <option value = "default">物件を選択してください</option>
            <option value="bld-1">物件1:ルヴェソンヴェール川崎</option>
            <option value="bld-2">物件2:ボナール尼崎</option>
            <option value="bld-3">物件3:ラフィネ札幌</option>
          </select>
        </div>
        <BldgPic Pic = {this.state.Pic} bldg={this.state.building}/>
        <Bldg bldg={this.state.building}/>
        <CalcButton disp={this.state.isBldSelected} handleClick={this.handleClick}/>
        <TktResult disp={this.state.isResultDisplay} loading={this.state.isLoadingDisplay} bldg={this.state.building}/>
        
      </div>
    );
  }
}
  