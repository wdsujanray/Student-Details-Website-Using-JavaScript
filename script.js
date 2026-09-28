// Array to store student details
let students = [];

function addStudent() {

    // Maximum 5 students
    if (students.length >= 5) {
        alert("You can add maximum 5 students.");
        return;
    }

    // Get input values
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let course = document.getElementById("course").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;

    // Check empty fields
    if (
        name === "" ||
        roll === "" ||
        course === "" ||
        age === "" ||
        email === ""
    ) {
        alert("Please fill all the fields.");
        return;
    }

    // Create student object
    let student = {
        name: name,
        roll: roll,
        course: course,
        age: age,
        email: email
    };

    // Store student in array
    students.push(student);

    // Display students
    displayStudents();

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("course").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
}

function displayStudents() {

    let container = document.getElementById("studentContainer");

    // Clear previous output
    container.innerHTML = "";

    // Display each student
    students.forEach(function(student, index) {

        let card = document.createElement("div");

        card.className = "student-card";

        card.innerHTML = `
            <h3>Student ${index + 1}</h3>
            <p><strong>Name:</strong> ${student.name}</p>
            <p><strong>Roll No:</strong> ${student.roll}</p>
            <p><strong>Course:</strong> ${student.course}</p>
            <p><strong>Age:</strong> ${student.age}</p>
            <p><strong>Email:</strong> ${student.email}</p>
        `;

        container.appendChild(card);
    });
}
