# Student Details Management System

A simple JavaScript-based web application that accepts student details from the user, stores the details in an array, and displays each student in a separate card/block on the webpage.

## Features

* Accepts student details through a form
* Supports a maximum of 5 students
* Stores student details in a JavaScript array
* Uses JavaScript objects to organize student data
* Displays each student in a separate card
* Validates empty input fields
* Clears the form after adding a student
* Uses HTML, CSS, and JavaScript

## Student Details

The application collects:

* Student Name
* Roll Number
* Course
* Age
* Email

## Technologies Used

* HTML5
* CSS3
* JavaScript

## Project Structure

```text
Student-Details/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How It Works

1. Enter the student's details in the input fields.
2. Click the **Add Student** button.
3. JavaScript creates an object containing the student's information.
4. The object is added to the `students` array using `push()`.
5. The `displayStudents()` function reads the array.
6. Each student is displayed as an individual card.
7. The application allows a maximum of 5 students.

## JavaScript Array

Student information is stored using an array:

```javascript
let students = [];
```

A student object is created as:

```javascript
let student = {
    name: name,
    roll: roll,
    course: course,
    age: age,
    email: email
};
```

The object is then added to the array:

```javascript
students.push(student);
```

## Example Data

```javascript
[
    {
        name: "Rahul",
        roll: "101",
        course: "BCA",
        age: "20",
        email: "rahul@gmail.com"
    },
    {
        name: "Priya",
        roll: "102",
        course: "BCA",
        age: "21",
        email: "priya@gmail.com"
    }
]
```

## Q1. `==` vs `===` in JavaScript

### `==` Double Equal Operator

The `==` operator compares values after performing type conversion when necessary.

```javascript
10 == "10"
```

Output:

```text
true
```

### `===` Triple Equal Operator

The `===` operator compares both the value and the data type without type conversion.

```javascript
10 === "10"
```

Output:

```text
false
```

### Difference

| Operator | Comparison                  | Example     | Result  |
| -------- | --------------------------- | ----------- | ------- |
| `==`     | Value after type conversion | `5 == "5"`  | `true`  |
| `===`    | Value and data type         | `5 === "5"` | `false` |

## How to Run

1. Download or clone the project.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Enter student details.
5. Click **Add Student**.
6. The student information will appear in cards below the form.

## Learning Outcomes

This project demonstrates:

* JavaScript variables
* Arrays
* Objects
* Functions
* `push()` method
* `forEach()` loop
* DOM manipulation
* User input handling
* Form validation
* Dynamic HTML generation
* CSS card layout

## Author

**Sujan Chandra Ray**

Full Stack Web Designer & Developer
