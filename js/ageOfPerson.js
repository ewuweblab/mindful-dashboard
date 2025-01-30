// Function
const calculateAge = (birthDate) => {
  // Convert birth date string to Date object
  const birth = new Date(birthDate);
  const today = new Date();

  // Get years
  let age = today.getFullYear() - birth.getFullYear();

  // Check if birthday hasn't occurred this year
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
};

// Unit test
// Get HTML element
// const elem = document.querySelector('time');

// Set to HTML element
// elem.textContent = ageOfSwoop;
// elem.setAttribute("datetime", ageOfSwoop );