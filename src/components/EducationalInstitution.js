import React from 'react';
import EditableText from './EditableText';
import DateOrPresent from './DateOrPresent';

class EducationalInstitution extends React.Component {
  render() {
    return (
      <div className="educational-institution my-4">
        <div className="school-info">
          <p>
            <span className="font-semibold">
              <EditableText text="Name of school" />
            </span>{' '}
            - <EditableText text="Title of study" />
          </p>
          <p className="date-range text-sm">
            <EditableText text="Enrolled" inputType="date" /> <span>to </span>
            <DateOrPresent text="Graduated" workOrSchool="school" />
          </p>
          <p className="text-sm">
            <EditableText text="Education description" inputType="textarea" />
          </p>
        </div>
        <button
          className="delete-school text-sm bg-red-300 hover:bg-red-400 text-gray-900 font-bold py-1 px-3 my-2 rounded inline-flex items-center"
          onClick={() => this.props.deleteSchool(this.props.schoolNum)}
        >
          <span>Remove</span>
        </button>
      </div>
    );
  }
}

export default EducationalInstitution;
