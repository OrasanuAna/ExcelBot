# ExcelBot

**ExcelBot** is a project designed to automate and simplify various operations with Excel files. This bot can read, write, and manipulate Excel data, making it a helpful tool for users looking to streamline repetitive tasks involving spreadsheets.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

ExcelBot provides an easy-to-use interface for performing essential Excel file operations programmatically. Whether you're handling data analysis, data entry, or spreadsheet formatting, ExcelBot can save time and reduce manual work.

## Features

- Read data from Excel files
- Write and update data in Excel sheets
- Format cells, add styles, and customize spreadsheets
- Basic error handling for data operations
- Modular structure for easy extension

## Project Structure

- **backend/**: Contains the server-side code, handling data processing and interactions with Excel files.
- **frontend/**: The user interface for interacting with ExcelBot. Built to provide a user-friendly experience.
- **jucarii/**: *(Optional)* Additional utilities or experimental code that might support backend/frontend functionalities.
- **.vscode/**: Contains configuration files for Visual Studio Code to optimize the development environment.
- **README.md**: Documentation for understanding and running the project.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/OrasanuAna/ExcelBot.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd ExcelBot
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install the required dependencies:
   - If using Node.js:
     ```bash
     npm install
     ```
   - If using Python (check for a `requirements.txt` file):
     ```bash
     pip install -r requirements.txt
     ```

3. Start the backend server:
   ```bash
   npm start
   ```
   or, for Python:
   ```bash
   python app.py
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Start the frontend application:
   ```bash
   npm start
   ```

## Usage

1. Once both the backend and frontend are running, open your browser and go to `http://localhost:3000` to access the ExcelBot interface.
2. Use the available options in the UI to interact with your Excel files.
