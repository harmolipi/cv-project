import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

class PreviewModeButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      previewMode: false,
    };
    this.togglePreviewMode = this.togglePreviewMode.bind(this);
    this.togglePreviewState = this.togglePreviewState.bind(this);
  }

  togglePreviewMode() {
    const previewElements = document.querySelectorAll('.hide-on-preview');
    previewElements.forEach((element) => {
      element.classList.toggle('hidden');
    });
    this.togglePreviewState();
  }

  togglePreviewState() {
    this.setState((prevState) => {
      return {
        previewMode: !prevState.previewMode,
      };
    });
  }

  render() {
    return (
      <button
        className="preview-mode-button text-sm bg-white border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white text-center py-1 px-3 rounded"
        onClick={this.togglePreviewMode}
      >
        {this.state.previewMode ? (
          <FontAwesomeIcon icon={faEyeSlash} />
        ) : (
          <FontAwesomeIcon icon={faEye} />
        )}{' '}
        <span className="ml-1">Preview mode</span>
      </button>
    );
  }
}

export default PreviewModeButton;
