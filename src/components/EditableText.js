import React, { useState, useEffect } from 'react';

const EditableText = ({ inputType = 'text', ...props }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState('');
  const [placeholder] = useState(props.text);

  const handleChange = (e) => setText(e.target.value);
  const handleClick = () => setIsEditing(true);
  const handleClickAway = (e) => {
    setIsEditing(false);
    setText(e.target.value);
  };

  useEffect(() => {
    if (isEditing) {
      document.querySelector('#currently-editing').focus();
    }
  }, [isEditing]);

  const inputField =
    inputType === 'textarea' ? (
      <textarea
        type={inputType}
        placeholder={placeholder}
        value={text}
        id="currently-editing"
        className="form-textarea appearance-none border rounded h-36 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
        onChange={handleChange}
        onBlur={handleClickAway}
      />
    ) : (
      <input
        type={inputType}
        placeholder={placeholder}
        value={text}
        id="currently-editing"
        className="shadow appearance-none border rounded w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={handleChange}
        onBlur={handleClickAway}
      />
    );

  if (isEditing) {
    return <span className="w-auto">{inputField}</span>;
  } else if (text) {
    return (
      <span className="editable-text" onClick={handleClick}>
        {inputType === 'date'
          ? new Date(text).toLocaleDateString('en-us', {
              year: 'numeric',
              month: 'long',
            })
          : text}
      </span>
    );
  } else {
    return (
      <span
        className="editable-text empty-field bg-blue-50 hover:bg-blue-200"
        onClick={handleClick}
      >
        {placeholder}
      </span>
    );
  }
};

export default EditableText;
