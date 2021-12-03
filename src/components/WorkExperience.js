import React from 'react';
import EditableText from './EditableText';
import DateOrPresent from './DateOrPresent';

class WorkExperience extends React.Component {
  render() {
    return (
      <div className="work-experience">
        <div className="work-info">
          <p className="font-semibold">
            <EditableText text="Company Name" />
          </p>
          <p>
            <EditableText text="Position Title" />
          </p>
          <p className="date-range text-sm">
            <EditableText text="Date started" inputType="date" /> to{' '}
            <DateOrPresent text="date stopped" workOrSchool="work" />
          </p>
          <p className="text-sm">
            <EditableText text="Work description" inputType="textarea" />
          </p>
        </div>
        <button
          className="delete-school delete-school text-sm bg-red-300 hover:bg-red-400 text-gray-900 font-bold py-1 px-3 my-2 rounded inline-flex items-center"
          onClick={() => this.props.deleteWork(this.props.workNum)}
        >
          Remove
        </button>
      </div>
    );
  }
}

export default WorkExperience;
