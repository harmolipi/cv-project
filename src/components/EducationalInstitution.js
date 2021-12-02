import React from 'react';
import EditableText from './EditableText';
import DateOrPresent from './DateOrPresent';

class EducationalInstitution extends React.Component {
  render() {
    return (
      <div className="educational-institution">
        <div className="school-info">
          <EditableText text="Name of school" />
          <EditableText text="Title of study" />
          <span className="date-range">
            <EditableText text="Date enrolled" inputType="date" /> to{' '}
            <DateOrPresent text="Date graduated" workOrSchool="school" />
          </span>
        </div>
        <button
          className="delete-school"
          onClick={() => this.props.deleteSchool(this.props.schoolNum)}
        >
          Remove
        </button>
      </div>
    );
  }
}

export default EducationalInstitution;
