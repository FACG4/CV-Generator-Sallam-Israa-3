import React from 'react';
import './FinalCv.css'

class SideDivInFinalForm extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }

render(){
  return <div  className="sideDivinCV">

<div className="contentInCV">
<div className="imgDiv">
<img className="img" src={this.props.src} alt="profile Img"/>
</div>
<div className="name">{this.props.name}</div>
<div className="contactDataDiv">
<div className="iconAndText"><i class="fas fa-at icon"></i><span className="contactDataSpan">{this.props.email}</span><br/></div>
<div className="iconAndText"><i class="fas fa-mobile-alt icon"></i><span className="contactDataSpan">{this.props.mobile}</span><br/></div>
<div className="iconAndText"><i class="fas fa-phone icon"></i><span className="contactDataSpan">{this.props.telephone}</span><br/></div>
</div>
<div className="skillsDiv">
<h3>SKILLS</h3>
<li>Javascript</li>
<li>HTML</li>
<li>CSS</li>
<li>
{this.props.skills}
</li>
</div>
<div className="skillsDiv">
<h3>EXPERIANCE</h3>
<li>
{this.props.experiance}
</li>
</div>
</div>
  </div>
}


}


export default SideDivInFinalForm;
