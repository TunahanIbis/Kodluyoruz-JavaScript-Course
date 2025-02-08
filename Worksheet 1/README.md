# Student Portal

## Overview
The Student Portal is a simple web application that calculates a student's letter grade based on their numerical exam score. The application accepts user input for the student's name, lecture, and numerical grade, and displays the corresponding letter grade and pass/fail status. If the grade is below 50, the student is marked as failing, while those above 50 are marked as passing.

This project uses basic HTML, JavaScript, and a little CSS for styling.

## Features
- **Grade Input**: The student enters their numerical exam grade (0-100).
- **Grade Calculation**: The system automatically calculates the student's letter grade based on predefined thresholds.
- **Pass/Fail Status**: The application checks if the student has passed or failed and displays a corresponding visual icon (checkmark or X).
- **Interactive**: The user is prompted for their name, lecture, and grade.
- **Visual Feedback**: The grade status is shown with color-coded feedback (green for pass, red for fail).

## How It Works
1. **Prompting for Input**: When the page is loaded, the application prompts the user to enter their name, the lecture name, and their numerical exam grade.
2. **Grade Calculation**: Based on the entered grade, the application determines the corresponding letter grade using the following scale:
   - 90 - 100: AA
   - 85 - 89: BA
   - 80 - 84: BB
   - 75 - 79: CB
   - 70 - 74: CC
   - 65 - 69: DC
   - 60 - 64: DD
   - 50 - 59: FD
   - Below 50: FF (Fail)
3. **Pass/Fail Status**: If the grade is 50 or above, the student is considered to have passed and is displayed with a checkmark. If the grade is below 50, the student has failed, and an X is displayed.
4. **Color Feedback**: Pass grades are highlighted in primary color, while fail grades are highlighted in red for better visibility.

## Prerequisites
- A modern web browser (Chrome, Firefox, Safari, etc.)
- Basic knowledge of HTML, CSS, and JavaScript for understanding the code

## Setup
1. Clone or download the project files.
2. Open the `index.html` file in any web browser.
3. The prompt will appear, asking for your name, lecture, and exam grade.
4. The grade calculation and pass/fail status will be displayed based on the input.

## Demo
A quick demo that visualizes the pass and fail conditions for each situation.

### Pass
* It returns "<b>You Pass</b>" if the letter grade is not calculated as FF.

* In this condition, the output text gets printed in green.

![PassTest](https://github.com/user-attachments/assets/d1841193-8dfa-49f2-aa98-43cde8d9964f)


<br>

### Fail
* It returns "<b>You Fail</b>" if the letter grade is calculated as FF.
  
* In this condition, the output text gets printed in red.

![FailTest](https://github.com/user-attachments/assets/2d4281d7-30f0-4d85-9372-22715f24a9c4)
