// task_1/js/main.ts

interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; // optional property
    location: string;
    [key: string]: any; // allows any additional properties
  }
  
  // Directors interface extending Teacher
  interface Directors extends Teacher {
    numberOfReports: number; // required property
  }
  
  // Interface for printTeacher function
  interface printTeacherFunction {
    (firstName: string, lastName: string): string; // function signature
  }
  
  // Function implementation
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
  };
  
  const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false, // additional property
  };
  
  console.log(teacher3);
  
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  console.log(director1);
  
  // Test the printTeacher function
  console.log(printTeacher("John", "Doe")); // Output: J. Doe
  