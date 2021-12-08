import React, { useState } from 'react';
import EditableText from './EditableText';

const DateOrPresent = ({ inputType = 'date', workOrSchool = 'work', text }) => {
  const [present, setPresent] = useState(false);
  const [verb] = useState(workOrSchool === 'work' ? 'working' : 'studying');

  const togglePresent = (e) => setPresent(e.target.checked);

  const textDisplay = present ? (
    <span>present</span>
  ) : (
    <EditableText
      inputType={inputType}
      workOrSchool={workOrSchool}
      text={text}
    />
  );

  return (
    <span>
      {textDisplay}
      <label className="hide-on-preview mx-1 text-sm">
        (Still {verb} here?
        <input
          type="checkbox"
          name="present"
          className="mx-2"
          checked={present}
          onChange={togglePresent}
        />
        )
      </label>
    </span>
  );
};

export default DateOrPresent;
