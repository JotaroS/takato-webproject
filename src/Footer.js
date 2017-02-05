import React from "react";
import ReactDom from 'react-dom';

export default class Footer  extends React.Component {
  constructor() {
    super();
    this.state= {
    }
  }


  render(){
    if(this.props.disp==true){
    return(
      <div className='col-xs-12' style={{background:"#FAF7ED"}}>
        <br />
        <center><h4> CORPOのコンセプト</h4></center> 
        <hr />
        
        <div className='col-xs-12' name="msg-block-1">
          <div className='col-xs-6'>
            Lorem ipsum Mollit ut do et cupidatat Excepteur non in ex sed esse Duis do id amet voluptate ea Ut incididunt qui nulla sit in dolore labore.
          </div>
          <div className='col-xs-6'>
            Lorem ipsum Elit ut labore ea esse est voluptate cillum magna exercitation in ullamco Excepteur et voluptate deserunt reprehenderit esse adipisicing reprehenderit veniam qui laboris ut.
          </div>
        </div>
        <div className = 'col-xs-12' style={{height:"30px"}}><hr/></div>


        <div name="msg-block-2" className='col-xs-12'>
          <div className='col-xs-6'>
            Lorem ipsum Mollit ut do et cupidatat Excepteur non in ex sed esse Duis do id amet voluptate ea Ut incididunt qui nulla sit in dolore labore.
          </div>
          <div className='col-xs-6'>
            Lorem ipsum Elit ut labore ea esse est voluptate cillum magna exercitation in ullamco Excepteur et voluptate deserunt reprehenderit esse adipisicing reprehenderit veniam qui laboris ut.
          </div>
        </div>
        <div className = 'col-xs-12' style={{height:"30px"}}><hr/></div>


        <div name="msg-block-3" className='col-xs-12'>
          <div className='col-xs-6'>
            Lorem ipsum Mollit ut do et cupidatat Excepteur non in ex sed esse Duis do id amet voluptate ea Ut incididunt qui nulla sit in dolore labore.
          </div>
          <div className='col-xs-6'>
            Lorem ipsum Elit ut labore ea esse est voluptate cillum magna exercitation in ullamco Excepteur et voluptate deserunt reprehenderit esse adipisicing reprehenderit veniam qui laboris ut.
          </div>
        </div>
        <div className = 'col-xs-12' style={{height:"30px"}}><hr/></div>
        <div className = 'col-xs-12' >
         <br />
         <img src="../img/banner-2.png" width="100%" />
        </div>
        <div className = 'col-xs-12' ><hr/></div>
      </div>
      );
  }
  else return(<div/>);
  }
}
