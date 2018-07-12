import React, {
  Component
} from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import './App.css';
import HomePageComponent from './Components/HomePageComponent';
import AllSections from './Components/AllSections';
import FinalCv from './Components/FinalCv';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    answers:{
      name: '',
      email: '',
      cellPhone:'',
      homePhone:'',
      address:'',
      degree: '',
      experiance: '',
      date: '',
      school: '',
      moreEducation: '',
      skill: '',
      summary: '',
      imgSrc:''
    }
}
    this.log = this.log.bind(this);
    this.newSrc = this.newSrc.bind(this);
   }

  log(name, value) {
     this.setState(prevState => {
      return {answers:{...prevState.answers, [name]: value}}
    })
  }



newSrc(att){
  this.setState(prevState => {
   return {answers:{...prevState.answers, ['imgSrc']: att}}
 })}



render() {
  return ( <BrowserRouter >
    <Switch >
    <Route exact path = '/'  component = {  HomePageComponent  }/>
    <Route exact path = '/QuestionForms'render ={ () => <AllSections answers={this.state.answers} log={this.log} newSrc={this.newSrc}/>}/>
    <Route exact path = '/finalcv' render = {() => < FinalCv
       username={this.state.answers.name} email={this.state.answers.email}
       mobile={this.state.answers.cellPhone} telephone={this.state.answers.homePhone}
       summary={this.state.answers.summary} education={this.state.answers.education}
       degree={this.state.answers.degree} school={this.state.answers.school}
       date={this.state.answers.date} moreEducation={this.state.answers.moreEducation}
       skill={this.state.answers.skill} experiance={this.state.answers.experiance}
       imgSrc={this.state.answers.imgSrc}/>}/ >
      </Switch>
      </BrowserRouter>
    )
  }

}
export {
  App
};
