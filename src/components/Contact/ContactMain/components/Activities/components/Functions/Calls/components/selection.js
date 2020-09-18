import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'busy', label: 'Busy' },
  { value: 'connected', label: 'Connected' },
  { value: 'leftLiveMsg', label: 'Left live message' },
  { value: 'leftVoicemail', label: 'Left voicemail' },
  { value: 'noAnswer', label: 'No answer' },
  { value: 'wrongNumber', label: 'Wrong number' },
];

export default class SelectMenu extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;
    return (
      <Select
        className="selectOptions"
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}
