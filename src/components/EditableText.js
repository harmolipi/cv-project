import React from 'react';
import '../styles/EditableText.css';

class EditableText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      text: '',
      placeholder: this.props.text,
      inputType: this.props.inputType,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickAway = this.handleClickAway.bind(this);
  }

  static defaultProps = {
    inputType: 'text',
  };

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleClick() {
    this.setState({ isEditing: true });
  }

  handleClickAway(event) {
    this.setState({
      isEditing: false,
      text: event.target.value,
    });
  }

  componentDidUpdate() {
    if (this.state.isEditing) {
      const activeInput = document.querySelector('#currently-editing');
      activeInput.focus();
    }
  }

  render() {
    const inputField =
      this.state.inputType === 'textarea' ? (
        <textarea
          type={this.state.inputType}
          placeholder={this.state.placeholder}
          value={this.state.text}
          id="currently-editing"
          onChange={this.handleChange}
          onBlur={this.handleClickAway}
        />
      ) : (
        <input
          type={this.state.inputType}
          placeholder={this.state.placeholder}
          value={this.state.text}
          id="currently-editing"
          onChange={this.handleChange}
          onBlur={this.handleClickAway}
        />
      );
    if (this.state.isEditing) {
      return <span>{inputField}</span>;
    }

    return this.state.text ? (
      <span className="editable-text" onClick={this.handleClick}>
        {this.state.text}
      </span>
    ) : (
      <span className="editable-text empty-field" onClick={this.handleClick}>
        {this.state.placeholder}
      </span>
    );
  }
}

export default EditableText;
