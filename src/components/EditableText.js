import React from 'react';

class EditableText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      text: '',
      placeholder: this.props.text,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickAway = this.handleClickAway.bind(this);
  }

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
    if (this.state.isEditing) {
      return (
        <div>
          <input
            type="text"
            placeholder={this.state.placeholder}
            value={this.state.text}
            id="currently-editing"
            onChange={this.handleChange}
            onBlur={this.handleClickAway}
          />
        </div>
      );
    }

    return (
      <div>
        <span onClick={this.handleClick}>
          {this.state.text || this.state.placeholder}
        </span>
      </div>
    );
  }
}

export default EditableText;
