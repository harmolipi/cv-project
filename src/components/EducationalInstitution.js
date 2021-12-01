import React from 'react';
import EditableText from './EditableText';

class EducationalInstitution extends React.Component {
  render() {
    return (
      <div>
        <EditableText text="Name of school" />
        <EditableText text="Title of study" />
        <EditableText text="Date of study" inputType="date" />
      </div>
    );
  }
}

export default EducationalInstitution;
