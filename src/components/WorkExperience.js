import React from 'react';
import EditableText from './EditableText';
import DateOrPresent from './DateOrPresent';

class WorkExperience extends React.Component {
  render() {
    return (
      <div className="work-experience">
        <div className="work-info">
          <EditableText text="Company Name" />
          <EditableText text="Position Title" />
          <EditableText text="Work description" inputType="textarea" />
          <span className="date-range">
            <EditableText text="Date started" inputType="date" /> to{' '}
            <DateOrPresent text="Date left" workOrSchool="work" />
          </span>
        </div>
        <button
          className="delete-school"
          onClick={() => this.props.deleteWork(this.props.workNum)}
        >
          Remove
        </button>
      </div>
    );
  }
}

export default WorkExperience;
