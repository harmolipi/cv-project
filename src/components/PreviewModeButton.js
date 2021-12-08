import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const PreviewModeButton = () => {
  const [previewMode, setPreviewMode] = useState(false);

  const togglePreviewMode = () => {
    const previewElements = document.querySelectorAll('.hide-on-preview');
    previewElements.forEach((element) => {
      element.classList.toggle('hidden');
    });
    togglePreviewState();
  };

  const togglePreviewState = () => {
    setPreviewMode((prevPreviewMode) => !prevPreviewMode);
  };

  return (
    <button
      className="preview-mode-button text-sm bg-white border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white text-center py-1 px-3 rounded"
      onClick={togglePreviewMode}
    >
      {previewMode ? (
        <FontAwesomeIcon icon={faEyeSlash} />
      ) : (
        <FontAwesomeIcon icon={faEye} />
      )}{' '}
      <span className="ml-1">Preview mode</span>
    </button>
  );
};

export default PreviewModeButton;
