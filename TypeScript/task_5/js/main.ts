// task_5/js/main.ts

// Define interfaces with brand properties
interface MajorCredits {
    credits: number;
    brand: 'major'; // Unique identifier
  }
  
  interface MinorCredits {
    credits: number;
    brand: 'minor'; // Unique identifier
  }
  
  // Function to sum MajorCredits
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return { credits: subject1.credits + subject2.credits, brand: 'major' };
  }
  
  // Function to sum MinorCredits
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return { credits: subject1.credits + subject2.credits, brand: 'minor' };
  }
  
  // Example usage
  const major1: MajorCredits = { credits: 3, brand: 'major' };
  const major2: MajorCredits = { credits: 4, brand: 'major' };
  const minor1: MinorCredits = { credits: 2, brand: 'minor' };
  const minor2: MinorCredits = { credits: 1, brand: 'minor' };
  
  const totalMajor = sumMajorCredits(major1, major2);
  const totalMinor = sumMinorCredits(minor1, minor2);
  
  console.log(totalMajor); // { credits: 7, brand: 'major' }
  console.log(totalMinor); // { credits: 3, brand: 'minor' }
  