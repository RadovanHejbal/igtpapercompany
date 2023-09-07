# Paper Company Dashboard

This is a simple dashboard interface for a paper company. The dashboard displays the following information:

- Total number of paper products sold.
- The most popular paper product.
- Total revenue generated.

## Features

- Displays real-time data for the paper company.
- Provides insights into sales and product popularity.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository: git clone https://github.com/RadovanHejbal/igtpapercompany.git
2. Open cloned file: cd igtpapercompany
3. Instal deppendencies: npm install
4. Run application: npm run dev
5. Open the web browser and visit: localhost:5173

### Dependencies
1. date-fns 2.30.0: used for better manipulation with dates
2. react-date-range 1.4.0: library for implementation of date filter
3. react 18.2.0
4. react-dom 18.2.0

## Project Structure
- **`src/`**: Contains the source code of the project.
  - **`components/`**: Contains date-range and dashboard box component
  - **`utils/`**: Contains functions for calculating data
  - **`*.css`**: Styling elements
  - **`App.tsx`**: The entry point for rendering the React application.
  - **`main.tsx`**: The main application entry point.
- **`public/`**: Contains public assets, such as temporary data.json file
- **`index.html`**: main html file
- **`package.json`**: Configuration file for Node.js dependencies.
- **`README.md`**: This file, providing project documentation.
- **`.gitignore`**: Specifies files and directories to be ignored by Git.

### Data
1. Mock data from JSON file, which represent individual purchases of paper products. (Only september 2023 for testing)

### Usage
1. Filtering data with date-range picker

## Aditional information
Simple UX/UI design.
