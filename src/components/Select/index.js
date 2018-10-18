import React, { Component } from "react";

class Select extends Component {
  handleChange = event => {
    this.props.onChange(event.target.value);
  };

  render = () => {
    const { options, value } = this.props;

    return (
      <select value={value} onChange={this.handleChange}>
        <option value="" disabled />
        {options.map((element, index) => {
          return (
            <option key={index} value={element}>
              {element}
            </option>
          );
        })}
      </select>
    );
  };
}

export default Select;
