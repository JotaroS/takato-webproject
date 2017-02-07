import React from 'react';
import ReactDom from 'react-dom';

export default class TktReliabilityEstimator extends React.Component {
	constructor(){
		super();
	}
	render() {
		const img = "./img/probability_figure.png";
		if(this.props.disp==true)
		return (
			<div className='col-md-12'>
				<img src={img} width="100%" />
				<br/>
				<p><small>※和泉の手法[3]に従い、信頼性解析を用いて鉄筋腐食リスクを算出した。
中性化進行とかぶり厚さは、材料の個体差や施工時のヒューマンエラー等の不確定性を考慮し、正規分布を仮定し、リスク計算を行っている。
中性化予測は仕上材の中性化率を考慮した放物線則をベースラインとし、変動係数CV=0.3を設定した[3]。
かぶり厚さはJASS5で設定されている最小かぶり厚さ30mmを平均値とし、文献[3]より標準偏差15mmを採用した。</small></p>
			</div>
		);
		else{
			return(<div />);
		}
	}
}