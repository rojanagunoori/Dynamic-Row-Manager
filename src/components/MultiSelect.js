import { useState } from 'react';
import Button from '@atlaskit/button';
import Select, { defaultTheme } from 'react-select';
//import "./MultiSelect.css"

const { colors } = defaultTheme;
export const stateOptionsInitial = [
  { value: "Item 1", label: "Item 1" },
  { value: "Item 2", label: "Item 2" },
  { value: "Item 3", label: "Item 3" },
  { value: "Item 4", label: "Item 4" },
];

const selectStyles = {
  control: (provided) => ({
    ...provided,
    minWidth: 240,
    margin: 8,
  }),
  menu: () => ({ boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)' }),
};

export default function MultiSelect({ rowId, selectedValues, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [options, setOptions] = useState(stateOptionsInitial);
  const [newOption, setNewOption] = useState("");

  const handleAddOption = () => {
    if (newOption.trim()) {
      const newEntry = { value: newOption, label: newOption };
      setOptions((prev) => [...prev, newEntry]);
      setNewOption("");
    }
  };

  const handleRemoveOption = (removedValue) => {
    setValue(value.filter((v) => v.value !== removedValue));
    if (onChange) onChange(rowId, value.map((item) => item.value));
  };

  return (
    <Dropdown
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      target={
        <Button
          iconAfter={<ChevronDown />}
          onClick={() => setIsOpen((prev) => !prev)}
          isSelected={isOpen}
        >
           {value.length ? (
            <div className="selected-values">
              {value.map((v) => (
                <span key={v.value} className="selected-item">
                  {v.label}
                  <button
                    className="remove-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveOption(v.value);
                    }}
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>
          ) : (
            'Select Options'
          )}
          {/*value ? `Selected: ${value.map(v => v.label).join(', ')}`//`State: ${value.label}` 
          : 'Select a State'*/}
        </Button>
      }
    >


   
      <Select
isMulti

value={options.filter((opt) => value.includes(opt))}
//value={options.filter((opt) => selectedValues.includes(opt.value))}

        autoFocus
        backspaceRemovesValue={false}
        components={{ DropdownIndicator, IndicatorSeparator: null }}
        controlShouldRenderValue={false}
        hideSelectedOptions={false}
        isClearable={false}
        menuIsOpen
        onChange={(newValue) => {
          setValue(newValue || []);
          if (onChange) onChange(rowId, newValue.map((item) => item.value));
         // setIsOpen(false);
        }}
        options={options}
        placeholder="Select an option"
        styles={selectStyles}
        tabSelectsValue={false}
        classNamePrefix="react-select" 
       // value={value}
      />
         <div style={{ padding: '8px' }}  className="add-option-container">
        <input
          type="text"
          value={newOption}
          placeholder="Add New Item"
           className="add-option-input"
          onChange={(e) => setNewOption(e.target.value)}
          style={{ width: '100', marginBottom: '8px', padding: '4px' }}
        />
        <button  className="add-option-button"  appearance="primary" onClick={handleAddOption} style={{ width: '100%' }}>
         + Add
        </button>
      </div>
    </Dropdown>
  );
}

// styled components

const Menu = (props) => {
  const shadow = 'hsla(218, 50%, 10%, 0.1)';
  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: 4,
        boxShadow: `0 0 0 1px ${shadow}, 0 4px 11px ${shadow}`,
        marginTop: 8,
        position: 'absolute',
        zIndex: 2,
      }}
      {...props}
    />
  );
};

const Blanket = (props) => (
  <div
    style={{
      bottom: 0,
      left: 0,
      top: 0,
      right: 0,
      position: 'fixed',
      zIndex: 1,
    }}
    {...props}
  />
);

const Dropdown = ({ children, isOpen, target, onClose }) => (
  <div style={{ position: 'relative' }}>
    {target}
    {isOpen ? <Menu>{children}</Menu> : null}
    {isOpen ? <Blanket onClick={onClose} /> : null}
  </div>
);

const Svg = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    focusable="false"
    role="presentation"
    {...props}
  />
);

const DropdownIndicator = () => (
  <div style={{ color: colors.neutral20, height: 24, width: 32 }}>
    <Svg>
      <path
        d="M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </Svg>
  </div>
);

const ChevronDown = () => (
  <Svg style={{ marginRight: -6 }}>
    <path
      d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </Svg>
);




/*import React, { useState } from "react";
import Select, { components } from "react-select";

const initialOptions = [
  { value: "Item 1", label: "Item 1" },
  { value: "Item 2", label: "Item 2" },
  { value: "Item 3", label: "Item 3" },
  { value: "Item 4", label: "Item 4" },
];

const MultiSelect = ({ rowId, selectedValues, onChange }) => {
  const [options, setOptions] = useState(initialOptions);
  const [newOption, setNewOption] = useState("");

  const handleAddOption = () => {
    if (newOption.trim() !== "") {
      const newOptionObj = { value: newOption, label: newOption };
      setOptions([...options, newOptionObj]);
      setNewOption(""); // Clear the input field after adding the option
    } else {
      alert("Please enter a valid option!");
    }
  };

  const handleChange = (selectedOptions) => {
    onChange(selectedOptions ? selectedOptions.map((opt) => opt.value) : []);
   // onChange(rowId, selectedOptions.map((opt) => opt.value));
  };

  const CustomMenuList = (props) => (
    <components.MenuList {...props}>
      {props.children}
      <div
        className="add-option-container"
        onClick={(e) => e.stopPropagation()} // Prevent dropdown from closing
      >
        <input
          type="text"
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
          placeholder="Enter new option"
          className="add-option-input"
          onKeyDown={(e) => e.stopPropagation()} 
        />
        <button className="add-option-button"  onClick={(e) => {
            e.preventDefault(); // Prevent dropdown from closing
            handleAddOption();
          }}>
          + Add
        </button>
      </div>
    </components.MenuList>
  );

  return (
    <div className="multi-select-wrapper">

      <Select
        isMulti
        options={options}
        onChange={handleChange}
        placeholder="Select options"


        value={options.filter((opt) => selectedValues.includes(opt.value))}
        components={{ MenuList: CustomMenuList }}
        closeMenuOnSelect={false} 
      />
      {/*<div className="add-option-container">
        <input
          type="text"
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
          placeholder="Enter new option"
          className="add-option-input"
        />
        <button className="add-option-button" onClick={handleAddOption}>
          + Add
        </button>
      </div>/}
    </div>
  );
};

export default MultiSelect;
*/