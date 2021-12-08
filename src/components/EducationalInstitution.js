import React from 'react';
import EditableText from './EditableText';
import DateOrPresent from './DateOrPresent';

const EducationalInstitution = (props) => {
  return (
    <div className="educational-institution my-4">
      <div className="school-info">
        <p>
          <span className="font-semibold">
            <EditableText text="Name of school" />
          </span>{' '}
          - <EditableText text="Title of study" />
        </p>
        <p className="date-range text-sm text-gray-500">
          <EditableText text="Date enrolled" inputType="date" />{' '}
          <span>to </span>
          <DateOrPresent text="date graduated" workOrSchool="school" />
        </p>
        <p className="text-sm mt-2">
          <EditableText text="Education description" inputType="textarea" />
        </p>
      </div>
      <button
        className="delete-school hide-on-preview text-sm bg-red-300 hover:bg-red-400 text-gray-900 font-bold py-1 px-3 my-2 rounded inline-flex items-center"
        onClick={() => props.deleteSchool(props.schoolNum)}
      >
        <span>Remove</span>
      </button>
    </div>
  );
};

export default EducationalInstitution;
