import React from 'react';
import EditableText from './EditableText';
import DateOrPresent from './DateOrPresent';

class WorkExperience extends React.Component {
  render() {
    return (
      <div>
        <EditableText text="Company Name" />
        <EditableText text="Position Title" />
        <EditableText text="Work description" inputType="textarea" />
        <EditableText text="Date started" inputType="date" />
        <DateOrPresent text="Date left" workOrSchool="work" />
      </div>
    );
  }
}

export default WorkExperience;
