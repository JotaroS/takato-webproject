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
    if(this.props.disp == true && this.props.suggestion=='genjyo' && this.props.bldg == 'bld-1'){
        return( 
        <div>

        <hr/>
          <div className = "card">
            <div className="col-xs-6">
              <h5>現状の維持管理計画下で適用可能な修繕工法</h5>
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
              <img src="../data/KAWASAKI/suggested.jpg" width="100%" />
            </div>
          </div>
          
      );
    }
    if(this.props.disp == true && this.props.suggestion=='suggested' && this.props.bldg == 'bld-1'){
        return( 
          <div>
          <hr/>
          <div className = "card">
            <div className="col-xs-6">
              <h5>CoRPOによる最適管理下で適用可能な修繕工法</h5>
              <hr/>
              <h6>外壁の状態： <span className="label label-success">良好:補修は不要</span></h6>
              <p>ランニングコスト削減のための修繕プランを提案をします</p>
              <ul>
                <li>アルミサッシを樹脂サッシに変更</li>
                <li>ガラスをペアガラス，Low-Eガラスに変更</li>
              </ul>
            </div>
            </div>
            <div className="col-xs-6">
              <img src="../data/KAWASAKI/genjo.jpg" width="100%" />
            </div>
            <p><small>※専門メーカー[4]によれば、シーリング材交換目安周期は5~10年と言われており、大規模修繕工事周期の12年よりスパンが短い。</small></p>

          </div>
      );
    }
    if(this.props.disp == true && this.props.suggestion=='genjyo' && this.props.bldg == 'bld-2'){
        return( 
        <div>

        <hr/>
          <div className = "card">
            <div className="col-xs-6">
              <h5>現状の維持管理計画下で適用可能な修繕工法</h5>
              <hr/>
               <h6>外壁の状態： <span className="label label-success">良好:補修は不要</span></h6>
              <p>ランニングコスト削減のための修繕プランを提案をします</p>
              <ul>
                <li>アルミサッシを樹脂サッシに変更</li>
                <li>ガラスをペアガラス，Low-Eガラスに変更</li>
                <li>再塗装の際は、耐候性の良いフッ素樹脂系、シリコン系の塗料を用いる。</li>
              </ul>
            </div>
            </div>
            <div className="col-xs-6">
              <img src="../data/AMA/suggested_A.JPG" width="100%" />
            </div>
           <p><small>※専門メーカー[4]によれば、シーリング材交換目安周期は5~10年と言われており、大規模修繕工事周期の12年よりスパンが短い。</small></p>

          </div>
          
      );
    }
    if(this.props.disp == true && this.props.suggestion=='suggested' && this.props.bldg == 'bld-2'){
        return( 
          <div>
          <hr/>
          <div className = "card">
            <div className="col-xs-6">
              <h5>CoRPOによる最適管理下で適用可能な修繕工法</h5>
              <hr/>
              <h6>外壁の状態： <span className="label label-success">良好:補修は不要</span></h6>
              <p>ランニングコスト削減のための修繕プランを提案をします</p>
              <ul>
                <li>アルミサッシを樹脂サッシに変更</li>
                <li>ガラスをペアガラス，Low-Eガラスに変更</li>
                <li>再塗装の際は、耐候性の良いフッ素樹脂系、シリコン系の塗料を用いる。</li>
              </ul>
            </div>
            </div>
            <div className="col-xs-6">
              <img src="../data/AMA/suggested_A.JPG" width="100%" />
            </div>
            <p><small>※専門メーカー[4]によれば、シーリング材交換目安周期は5~10年と言われており、大規模修繕工事周期の12年よりスパンが短い。</small></p>

          </div>
      );
    }
    if(this.props.disp == true && this.props.suggestion=='genjyo' && this.props.bldg == 'bld-3'){
        return( 
        <div>

        <hr/>
          <div className = "card">
            <div className="col-xs-6">
              <h5>現状の維持管理計画下で適用可能な修繕工法</h5>
              <hr/>
              <h6>外壁の状態： <span className="label label-danger">不良:補修が必要</span></h6>
              <h6>補修工法</h6>
              <ul>
                <li>部分塗り改修工法</li>
                <li>全面塗り改修工法</li>                
              </ul>
              <hr />
              <h6>損傷が軽微であった場合の補修工法</h6>
              <ul>
                <li>樹脂注入工法</li>
                <li>Uカットシール材充填工法</li>                
              </ul>
            </div>
            </div>
            <div className="col-xs-6">
              <img src="../data/Hokkaido/suggested_H.png" width="100%" />
            </div>
          </div>
          
      );
    }
    if(this.props.disp == true && this.props.suggestion=='suggested' && this.props.bldg == 'bld-3'){
        return( 
          <div>
          <hr/>
          <div className = "card">
            <div className="col-xs-6">
              <h5>CoRPOによる最適管理下で適用可能な修繕工法</h5>
              <hr/>
              <h6>外壁の状態： <span className="label label-success">良好:補修は不要</span></h6>
              <p>ランニングコスト削減のための修繕プランを提案をします</p>
              <ul>
                <li>アルミサッシを樹脂サッシに変更</li>
                <li>ガラスをペアガラス，Low-Eガラスに変更</li>
                <li>高圧洗浄し、撥水剤の再塗布</li>
              </ul>
            </div>
            </div>
            <div className="col-xs-6">
              <img src="../data/Hokkaido/genjyo_H.jpg" width="100%" />
            </div>
            <p><small>※専門メーカー[4]によれば、シーリング材交換目安周期は5~10年と言われており、大規模修繕工事周期の12年よりスパンが短い。</small></p>

          </div>
      );
    }

    else return(<div/>);
  }
}
