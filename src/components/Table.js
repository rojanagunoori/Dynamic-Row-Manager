import React, { useState } from "react";
import SingleSelect from "./SingleSelect";
import MultiSelect from "./MultiSelect";

const Table = () => {
  const [rows, setRows] = useState([
    { singleSelect: "", multiSelect: [] },
  ]);

  // Handle adding a new row to the table
  const handleAddRow = () => {
    setRows([...rows, { singleSelect: "", multiSelect: [] }]);
  };

  // Get all selected options for Label 1
  const getDisabledOptions = () => {
    return rows.map((row) => row.singleSelect).filter((value) => value !== "");
  };

  // Handle updating a single row's `singleSelect` value
  const handleSingleSelectChange = (value, index) => {
    const updatedRows = [...rows];
    updatedRows[index].singleSelect = value;
    setRows(updatedRows);
  };

  // Handle updating a single row's `multiSelect` values
  const handleMultiSelectChange = (values, index) => {
    const updatedRows = [...rows];
    updatedRows[index].multiSelect = values;
    setRows(updatedRows);
  };

  return (
    <div className="table-wrapper">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Label 1</th>
            <th>Label 2</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <SingleSelect
                  selectedValue={row.singleSelect}
                  onChange={(value) => handleSingleSelectChange(value, index)}
                  disabledOptions={getDisabledOptions()}
                />
              </td>
              <td>
                <MultiSelect
                  selectedValues={row.multiSelect}
                  onChange={(values) => handleMultiSelectChange(values, index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-new-row-btn" onClick={handleAddRow}>
        + Add New Row
      </button>
    </div>
  );
};

export default Table;
