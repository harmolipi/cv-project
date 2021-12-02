import React from 'react';
import EditableText from './EditableText';

class DateOrPresent extends EditableText {
  constructor(props) {
    super(props);
    this.state = {
      present: false,
      verb: this.props.workOrSchool === 'work' ? 'working' : 'studying',
    };
    this.togglePresent = this.togglePresent.bind(this);
  }

  static defaultProps = {
    inputType: 'date',
    workOrSchool: 'work',
  };

  togglePresent = (e) => {
    this.setState({
      present: e.target.checked,
    });
  };

  render() {
    const textDisplay = this.state.present ? (
      <span>present</span>
    ) : (
      <EditableText {...this.props} />
    );

    return (
      <span>
        {textDisplay}
        <label>
          (Still {this.state.verb} here?)
          <input
            type="checkbox"
            name="present"
            checked={this.state.present}
            onChange={this.togglePresent}
          />
        </label>
      </span>
    );
  }
}

export default DateOrPresent;
