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
  
  // Interface for StudentClass
  interface Student {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Class implementation
  class StudentClass implements Student {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  // Example usage
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
  
  // Create a StudentClass instance and test methods
  const student1 = new StudentClass("Jane", "Smith");
  console.log(student1.displayName()); // Output: Jane
  console.log(student1.workOnHomework()); // Output: Currently working
  