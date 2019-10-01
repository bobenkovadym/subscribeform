import React from 'react';
import '../css/App.css';
import { Thanks } from './Thanks';
import { Capture } from './Capture';

import arrowImg from '../images/arrow.png';
import closeImg from '../images/close.png';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      captured: false,
      eMail: ''
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleLeadform = this.handleLeadform.bind(this);
  }

  componentDidMount() {
    this.checkIfShouldPopup();
  }

  checkIfShouldPopup() {
    let isCaptured = localStorage.getItem('leadform-captured');
    if (isCaptured === null) {
      this.setState({ captured: false })
    } else {
      this.setState({ captured: true })
    }
  }

  handleLeadform() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  onFormSubmit(form) {
    this.setState({ captured: true, eMail: form });
    localStorage.setItem('leadform-captured', 'yes');
  }

  render() {
    const { leadform } = this.props;
    let leadClassName = (this.state.isOpen) ? 'open' : 'closed';
    let content;
    if(this.state.captured){
      content = <Thanks thanks={leadform.thanks} />
    } else {
      content = <Capture button={leadform.form} info={leadform.info} onFormSubmit={this.onFormSubmit}/>
    }

    if(this.state.captured && !this.state.isOpen) {
      return(
        <div id="leadform-wrapper"></div>
      );
    } else {
      return(
        <div id="leadform-wrapper" className={leadClassName}>
          <div className="leadform-opennote" onClick={this.handleLeadform}>
            <div className="leadform-opennote-title">
              {leadform.info.title}
            </div>
            <div className="leadform-opennote-arrow">
              <img src={arrowImg} alt="arrowImg"/>
            </div>
          </div>
          <div className="leadform-note">
            <div className="leadform-note-inner">
              <div className="leadform-note-close" onClick={this.handleLeadform}>
                <img src={closeImg} alt="closeImg"/>
              </div>
              {content}
            </div>
          </div>
        </div>
      );
    }
  }
}
