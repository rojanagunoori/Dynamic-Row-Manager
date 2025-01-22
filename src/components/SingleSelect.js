import React from "react";
import Select from "react-select";

const SingleSelect = ({ selectedValue, onChange, disabledOptions }) => {
  const options = [
    { value: "Option 1", label: "Option 1" },
    { value: "Option 2", label: "Option 2" },
    { value: "Option 3", label: "Option 3" },
    { value: "Option 4", label: "Option 4" },
  ];

  // Filter out already selected options
  const availableOptions = options.filter(
    (option) => !disabledOptions.includes(option.value)
  );

  const handleChange = (selectedOption) => {
    onChange(selectedOption ? selectedOption.value : "");
  };

  return (
    <Select
      options={availableOptions}
      value={availableOptions.find((opt) => opt.value === selectedValue)}
      onChange={handleChange}
      placeholder="Select an option"
      isClearable
    />
  );
};

export default SingleSelect;
