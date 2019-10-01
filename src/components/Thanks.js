import React from 'react';
import '../css/App.css';

export const Thanks = props => (
  <div>
    <div className="leadform-note-title">{props.thanks.title}</div>
    <div dangerouslySetInnerHTML={{__html: props.thanks.content}}></div>
  </div>
);
