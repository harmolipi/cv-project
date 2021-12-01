import React from 'react';
import EditableText from './EditableText';

class WorkExperience extends React.Component {
  render() {
    return (
      <div>
        <EditableText text="Company Name" />
        <EditableText text="Position Title" />
        <EditableText text="Work description" inputType="textarea" />
        <EditableText text="Date started" inputType="date" />
        <EditableText text="Date ended" inputType="date" />
      </div>
    );
  }
}

export default WorkExperience;
