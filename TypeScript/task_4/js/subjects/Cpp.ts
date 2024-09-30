// task_4/js/subjects/Cpp.ts

namespace Subjects {
    export interface Teacher {
      experienceTeachingC?: number; // Using declaration merging
    }
  
    export class Cpp extends Subject {
      getRequirements(): string {
        return 'Here is the list of requirements for Cpp';
      }
  
      getAvailableTeacher(): string {
        if (this.teacher.experienceTeachingC === undefined || this.teacher.experienceTeachingC === 0) {
          return 'No available teacher';
        }
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
  }
  