import React from "react";
import ReactDom from 'react-dom';
export default class TktIzumiRiskEstimator  extends React.Component {
  constructor() {
    super();
    this.state= {
    }
  }


  render(){
      if(this.props.disp == true){
      return( 
        <div className="col-xs-12">
        <hr />
        <p><strong>
		        劣化状況が非常に悪ければ、適用可能な工法のバリエーションは少なくなるうえ、高価な工法になる。
		劣化状況が目視で確認できない場合においても、材料劣化は着実に進んでいるため、やはり定期的な補修が必要である。
		さらに、CoRPOプランにおいては資金的に余裕を持ちながら修繕を行っていくことが可能なため、
		ランニングコスト削減のためのリニューアル等も可能となる。
		</strong></p>
        <hr />
        </div>
    );
  }
  else return(<div/>);
  }
}
