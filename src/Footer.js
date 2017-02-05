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
        Lorem ipsum Exercitation aute laboris consectetur aliquip quis ea et minim cillum nulla aute minim ad adipisicing nisi aliqua ad Duis commodo eiusmod in dolor elit enim ad dolore culpa eu ut labore ea elit anim do sunt ex sint labore voluptate in reprehenderit cupidatat exercitation consectetur ea deserunt exercitation minim officia dolore cillum in dolor esse labore cillum dolor laboris sed elit eu velit veniam do in deserunt ut velit dolore amet in in esse incididunt Ut sunt velit non et dolore laboris officia ea cupidatat veniam nostrud incididunt proident consequat adipisicing quis occaecat eiusmod Ut in minim amet occaecat labore laboris enim qui ex laboris ut qui ex dolor cillum ea sit laboris pariatur ex aute eiusmod et Ut non magna pariatur aliquip ea do do tempor ea ut do amet enim aliqua in sed minim sed qui reprehenderit sunt dolor ea Duis ex ea id labore aliquip ullamco sunt pariatur quis exercitation consequat aliqua enim quis irure ullamco labore ullamco mollit Excepteur sint nisi irure sit ad id labore in non elit exercitation sint laborum pariatur esse laborum culpa Ut cupidatat dolor tempor et ex pariatur aliquip laborum cillum ea sint elit ad non irure aute eu consectetur aliquip enim mollit ea adipisicing reprehenderit et culpa nostrud sint commodo qui sunt in commodo ut incididunt in exercitation anim voluptate in ut velit Ut pariatur adipisicing ut ullamco reprehenderit quis nisi aliqua.
      </div>
      );
  }
  else return(<div/>);
  }
}
