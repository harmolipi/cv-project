import React from 'react';

class PreviewModeButton extends React.Component {
  constructor(props) {
    super(props);
  }

  togglePreviewMode() {
    const previewElements = document.querySelectorAll('.hide-on-preview');
    previewElements.forEach((element) => {
      element.classList.toggle('hidden');
    });
  }

  render() {
    return (
      <button
        className="preview-mode-button text-sm bg-white border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white text-center py-1 px-3 rounded"
        onClick={this.togglePreviewMode}
      >
        Preview mode
      </button>
    );
  }
}

export default PreviewModeButton;
