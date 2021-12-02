import React from 'react';
import EditableText from './EditableText';
import DateOrPresent from './DateOrPresent';

class EducationalInstitution extends React.Component {
  render() {
    return (
      <div>
        <EditableText text="Name of school" />
        <EditableText text="Title of study" />
        <EditableText text="Date enrolled" inputType="date" />
        <DateOrPresent text="Date graduated" workOrSchool="school" />
      </div>
    );
  }
}

export default EducationalInstitution;
