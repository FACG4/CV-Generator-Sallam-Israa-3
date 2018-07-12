import React from 'react';
import './ImageSectionComponent.css';
import { BrowserRouter, Route, Switch , Link} from 'react-router-dom';

class ImageSectionComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={src:''}
    this.generateCV = this.generateCV.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(evt) {
     var files = evt.target.files;
   if (FileReader && files && files.length) {
       var fr = new FileReader();
       fr.onload = () => {
         this.props.newSrc(fr.result)}
       fr.readAsDataURL(files[0])}}



  generateCV(){
window.location='/finalcv'}

  render(){return <div className="ImageSectionComponent">
<br/><br/>
    <span className="span">Add professional image for you<br/></span>
    <label className="imageDiv">Browse
    <input type="file" onChange={this.handleInputChange} />
    </label>
    <div className="generateBtn">
    <Link to='/finalcv' className="genarateCV">GENERATE!</Link>
    </div>
    </div>}

}


export default ImageSectionComponent;
