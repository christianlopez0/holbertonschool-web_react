// task_2/js/main.ts

interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  class Director implements DirectorInterface {
    workFromHome(): string {
      return "Working from home";
    }
  
    getCoffeeBreak(): string {
      return "Getting a coffee break";
    }
  
    workDirectorTasks(): string {
      return "Getting to director tasks";
    }
  }
  
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return "Cannot work from home";
    }
  
    getCoffeeBreak(): string {
      return "Cannot have a break";
    }
  
    workTeacherTasks(): string {
      return "Getting to work";
    }
  }
  
  function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    }
    return new Director();
  }
  // Type predicate to check if the employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
  }
  
  // Function to execute work based on employee type
  function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
      return employee.workDirectorTasks(); // Call Director method
    } else {
      return employee.workTeacherTasks(); // Call Teacher method
    }
  }
  
  // Example usage:
  console.log(executeWork(createEmployee(200)));   // Getting to work
  console.log(executeWork(createEmployee(1000)));  // Getting to director tasks
  