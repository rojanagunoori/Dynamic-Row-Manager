# Dynamic Selectable Table with Row and Option Management

A responsive React-based table with dynamic row management, single-select dropdowns, and multi-select dropdowns. The project allows users to add new rows, manage dropdown options, and ensure no duplicate selections for "Label 1". It also supports the addition of new items to the multi-select options list.

## Features
- **Dynamic Row Management**: Add new rows to the table dynamically.
- **Single Select Dropdown**: Ensures unique selection across rows for "Label 1".
- **Multi-Select Dropdown**: Allows multiple selections with the ability to add custom items.
- **Responsive Design**: Optimized for various screen sizes.
- **Customizable Options**: Users can add new options to the multi-select dropdown.

## Tech Stack
- **React**: JavaScript library for building user interfaces.
- **React-Select**: Customizable select component for React.
- **CSS**: For responsive styling.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rojanagunoori/Dynamic-Row-Manager.git
Navigate to the project directory:



cd dynamic-selectable-table
Install dependencies:

npm install
Start the development server:
npm start
Open the app in your browser at http://localhost:3000.

Project Structure

src/
├── components/
│   ├── Table.js           # Main table component
│   ├── SingleSelect.js    # Single-select dropdown component
│   ├── MultiSelect.js     # Multi-select dropdown with custom option addition
├── App.js                 # Main entry point of the app
├── App.css                # Styles for the app
Usage
Add New Row: Click the + Add New Row button to add a new row to the table.
Single Select: Select a unique option for "Label 1" in each row.
Multi-Select: Choose multiple options or add new options dynamically for "Label 2".