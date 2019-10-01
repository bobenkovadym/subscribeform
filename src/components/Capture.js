import React from 'react';
import '../css/App.css';

export class Capture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit (e) {
    e.preventDefault();
    this.props.onFormSubmit(this.state.form);
  }

  handleChange(e) {
    this.setState({ form: e.target.value })
  }

  render() {
    return (
      <div>
        <div className="leadform-note-title">
          {this.props.info.title}
        </div>
        <p>{this.props.info.content}</p>
        <form onSubmit={this.onSubmit}>
          <div className="leadform-note-form-group">
            <input type="email" placeholder="Email" required onChange={this.handleChange}/>
          </div>
          <div className="leadform-note-form-group">
             <input type="submit" value={this.props.button.buttonText} />
          </div>
        </form>
      </div>
    );
  }
}
