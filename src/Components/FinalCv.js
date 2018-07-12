import React from 'react';
import SideDivInFinalForm from './SideDivInFinalForm';
import './FinalCv.css'

class FinalCv extends React.Component{
  constructor(props){
    super(props);
    this.state={name:'',};
  }

render(){return <div className="FinalCv">
<div>
<SideDivInFinalForm name={this.props.username} email={this.props.email} src={this.props.imgSrc} mobile={this.props.mobile} telephone={this.props.telephone} skills={this.props.skill} experiance={this.props.experiance}/>
</div>

<div className="containerCV">

<h1 className="title">SUMMARY</h1>
<p>{this.props.summary}</p>
<h1 className="title">EDUCATION{this.props.education}</h1>
<p>{this.props.education}</p>

<h3>{this.props.degree}</h3>
<p>{this.props.school}</p>
<p>{this.props.date}</p>
<p>{this.props.moreEducation}</p>

</div>
  </div>}

}

export default FinalCv;
