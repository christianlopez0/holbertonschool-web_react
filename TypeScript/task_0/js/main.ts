// js/main.ts

// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student objects
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

// Store students in an array
const studentsList: Student[] = [student1, student2];

// Function to render the student table
function renderStudentsTable(students: Student[]) {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    const headerFirstName = document.createElement('th');
    const headerLocation = document.createElement('th');
    
    headerFirstName.innerText = 'First Name';
    headerLocation.innerText = 'Location';
    
    headerRow.appendChild(headerFirstName);
    headerRow.appendChild(headerLocation);
    table.appendChild(headerRow);

    // Append rows for each student
    students.forEach(student => {
        const row = document.createElement('tr');
        const cellFirstName = document.createElement('td');
        const cellLocation = document.createElement('td');

        cellFirstName.innerText = student.firstName;
        cellLocation.innerText = student.location;

        row.appendChild(cellFirstName);
        row.appendChild(cellLocation);
        table.appendChild(row);
    });

    // Append the table to the body
    document.body.appendChild(table);
}

// Call the function to render the table
renderStudentsTable(studentsList);
