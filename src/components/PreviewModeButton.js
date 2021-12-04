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
        className="preview-mode-button text-sm bg-white hover:bg-gray-200 text-black-900 font-bold py-1 px-3 my-2 rounded border-opacity-100 border-2 inline-flex items-center"
        onClick={this.togglePreviewMode}
      >
        Preview mode
      </button>
    );
  }
}

export default PreviewModeButton;
