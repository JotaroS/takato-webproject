import React from "react";
import ReactDom from 'react-dom';

export default class TktSuggestion  extends React.Component {
  constructor() {
    super();
    this.state= {
      isClicked:false,
    }
    this.handleClicked=this.handleClicked.bind(this);
  }
  handleClicked(){

  }
  render(){
    if(this.props.disp == true && this.props.suggestion=='genjyo'){
        return( 
        <div>
          <div className = "card">
            <div className="col-xs-6">
              <h5>現状手法に対する工法の提案</h5>
              <hr/>
              <h6>外壁の状態： <span className="label label-danger">不良:補修が必要</span></h6>
              <h6>補修工法</h6>
              <ul>
                <li>タイル全面張替え工法</li>
                <li>タイル部分張替え工法</li>                
              </ul>
              <hr />
              <h6>損傷が軽微であった場合の補修工法</h6>
              <ul>
                <li>アンカーピンニングエポキシ樹脂注入工法</li>
                <li>アンカーピンニングポリマーセメントスラリー注入工法</li>                
              </ul>
            </div>
            </div>
            <div className="col-xs-6">
              <img src="../img/genjyo_K.jpg" width="100%" />
            </div>
          </div>
          
      );
    }
    if(this.props.disp == true && this.props.suggestion=='suggested'){
        return( 
          <div>
          <div className = "card">
            <div className="col-xs-6">
              <h5>提案手法に対する工法の提案</h5>
              <hr/>
              <h6>外壁の状態： <span className="label label-success">良好:補修は不要</span></h6>
              <p>設備充実のための投資プランを提案します</p>
              <ul>
                <li>アルミサッシを樹脂サッシに変更</li>
                <li>ガラスをペアガラス，Low-Eガラスに変更</li>
                <li>シーリング材の補修スパンを短期化。</li>
                <li>ひび割れ誘発目地のコーキング保守。</li>
              </ul>
            </div>
            </div>
            <div className="col-xs-6">
              <img src="../img/suggested_K.jpg" width="100%" />
            </div>
          </div>
      );
    }

    else return(<div/>);
  }
}
