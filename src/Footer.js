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
      <div className='col-xs-12' style={{background:"#FCF8EE"}}>
        <br />
        <center><h4> CORPOのコンセプト</h4></center> 
        <hr />
        
        <div className='col-xs-12' name="msg-block-1">
          <div className='col-xs-6'>
            RC構造物の約半数は50年で寿命を迎えることがわかっている。
            適切なメンテナンスが行われず、修復不可能な段階まで劣化が進んだ集合住宅は、
            完全建て替えが必要となる。
            建て替えにはデベロッパーの発注ベースで戸当たり1700万円程度かかるが、
            これは多くの集合住宅にとって現実的な選択肢とならない。
            既存の集合住宅に長く、大切に「住まう」ことが必要である。
          </div>
          <div className='col-xs-6'>
            <img src="../img/graph.png" width="100%"/>
          </div>
        </div>
        <div className = 'col-xs-12' style={{height:"30px"}}><hr/></div>


        <div name="msg-block-2" className='col-xs-12'>
          <div className='col-xs-6'>
            <br /><br />
            <img src="../img/graph2.png" width="100%"/>
          </div>
          <div className='col-xs-6'>
          JASS5の耐久設計基準では超長期級として
          200年耐久のRC構造物の設計基準が示されている。
          しかし、実構造物でそのような超長期耐久に挑むことは容易なことではない。
          実際に、従来の維持管理体系では対応が明らかに不十分である。
          維持管理に関するソフト面へ介入することで、200年耐久を実現させる。
          </div>
        </div>
        <div className = 'col-xs-12'>
          <br />
          <img src="../img/jojiro.png" width="100%"/> 
          <br />
        </div>
      
        <div className = 'col-xs-12' >
         <br />
         <img src="../img/banner-2.png" width="100%" />
        </div>
        <div className = 'col-xs-12' ><hr/></div>
                 <div className = "col-md-12">
                <p>文献リスト</p>
                <p><small>[1]日本ビル新聞社:ビルメンテナンスの積算＆見積,2016</small></p>
                <p><small>[2]春畑他:既存鉄筋コンクリート造建築物のコンクリート材料調査における圧縮強度と中性化深さの統計</small></p>
                <p><small>[3]和泉他:鉄筋コンクリート造建築物における鉄筋のかぶり厚さの信頼性設計手法の提案</small></p>
                <p><small>[4]セメダイン:http://faq.cemedine.co.jp/faq/show/526</small></p>
                <p><small>[5]一般財団法人 建築保全センター:公共建築改修工事標準仕様書(建築工事編),2016</small></p>
         </div>
      </div>
      );
  }
  else return(<div/>);
  }
}
