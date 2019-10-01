import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const leadform = {
  info: {
    title: 'popup text',
    content: 'Main text'
  },
  thanks: {
    title: 'Thanks for signing up',
    content: ''
      + '<p>Thanks text</p>'
      + '<p></p>'
      + '<p></p>'
  },
  form: {
    buttonText: 'button text'
  }
}

ReactDOM.render(<App leadform={leadform}/>, document.getElementById('root'));
