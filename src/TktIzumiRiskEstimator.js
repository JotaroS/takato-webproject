import React from "react";
import ReactDom from 'react-dom';

export default class TktIzumiRiskEstimator  extends React.Component {
  constructor() {
    super();
  }
  render(){
    alert(this.props.bldg);
    if(this.props.disp == true &&　this.props.bldg == "bld-2"){
      return( 
        <div>
          <center><h6>和泉式信頼性解析による鉄筋腐食リスクの計算[%]</h6></center>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th></th>
                <th>30年</th>
                <th>75年</th>
                <th>100年</th>
                <th>200年</th>                
              </tr>
            </thead>
            <tbody>
              <tr className="active">
                <th scope="row">現状手法</th>
                <td >5.43</td>
                <td>9.41</td>
                <td>13.6</td>
                <td>25.8</td>                
              </tr>
              <tr className = "success">
                <th scope="row">提案手法</th>
                <td>4.09</td>
                <td>5.46</td>
                <td>6.71</td>
                <td>10.1</td>                
              </tr>
            </tbody>
          </table>
        </div>
    );
  }
  else if(this.props.disp == true &&　this.props.bldg == "bld-1"){
      return( 
        <div>
          <center><h6>和泉式信頼性解析による鉄筋腐食リスクの計算[%]</h6></center>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th></th>
                <th>30年</th>
                <th>75年</th>
                <th>100年</th>
                <th>200年</th>                
              </tr>
            </thead>
            <tbody>
              <tr className="active">
                <th scope="row">現状手法</th>
                <td>5.33</td>
                <td>9.26</td>
                <td>13.4</td>
                <td>25.6</td>                
              </tr>
              <tr className = "success">
                <th scope="row">提案手法</th>
                <td>3.96</td>
                <td>5.22</td>
                <td>6.36</td>
                <td>9.44</td>                
              </tr>
            </tbody>
          </table>
        </div>
    );
  }

  else if(this.props.disp == true &&this.props.bldg == "bld-3"){
      return( 
        <div>
          <center><h6>和泉式信頼性解析による鉄筋腐食リスクの計算[%]</h6></center>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th></th>
                <th>30年</th>
                <th>75年</th>
                <th>100年</th>
                <th>200年</th>                
              </tr>
            </thead>
            <tbody>
              <tr className="active">
                <th scope="row">現状手法</th>
                <td>5.43</td>
                <td>9.41</td>
                <td>13.4</td>
                <td>25.8</td>                
              </tr>
              <tr className = "success">
                <th scope="row">提案手法</th>
                <td>4.09</td>
                <td>5.46</td>
                <td>6.71</td>
                <td>10.1</td>                
              </tr>
            </tbody>
          </table>
        </div>
    );
  }
  else return(<div/>);
  }
}
