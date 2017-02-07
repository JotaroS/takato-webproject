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
        
        <div className = 'col-xs-12' ><hr/>
        <center><p>200年住まわれた住宅は今から200年後どのような価値を持つのか。</p></center>
        <center><p>本当に200年使われた建築物は文化財となるほどの権威性を帯びる。</p></center>        
        <center><p>　こと集合住宅に関しては住まわれ続けたのであれば、尚更強い意味を持つ。　</p></center>
        <center><p>　そして中高層集合住宅こそが、200年耐久の可能性を秘める。　</p></center>
        <center><p>　200年耐久が達成されれば、その他のビルディングタイプも200年耐久へ動き出す。　</p></center>        
        <center><p>　200年後の都市がどうなっているかは、誰にもわからない。　</p></center>        
        <center><p>　しかし、耐久性の限界である200年に挑んだ記憶は外観の表情にも現れ、　</p></center>        
        <center><p>　その事実と記憶は後世への財産となる。　</p></center>                
        <center><p>　Project:CoRPOはそのプロトタイプとなるプロジェクトである。　</p></center>                        
        <hr />
        </div>
      
        <div className = 'col-xs-12' >
         <br />
         <img src="../img/banner-2.png" width="100%" />
        </div>
        <div className = 'col-xs-12' ><hr/></div>
                 <div className = "col-md-12">
         Lorem ipsum Reprehenderit nisi Duis dolore sint velit sed amet elit in aliquip consectetur esse ullamco amet nisi ex dolor do laboris cillum ullamco deserunt adipisicing exercitation veniam non minim tempor nulla cillum nulla in veniam adipisicing ea consectetur voluptate in magna sit anim sint culpa ex deserunt commodo consequat enim dolore sit ullamco laborum ut et non officia consectetur eiusmod dolore in dolore labore occaecat pariatur in veniam dolore qui consectetur tempor qui esse in mollit est aliqua ad laboris anim eiusmod dolor nisi elit dolore Ut dolor tempor esse nisi labore elit nisi consequat Ut culpa ea eu sed laborum consequat exercitation laboris proident non pariatur Excepteur ea commodo in irure nulla consequat Duis officia consequat amet commodo culpa id laboris consequat reprehenderit mollit minim anim eiusmod nisi laboris exercitation proident Excepteur aute reprehenderit sunt velit ut nulla nisi velit sint ullamco adipisicing occaecat.
         </div>
      </div>
      );
  }
  else return(<div/>);
  }
}
