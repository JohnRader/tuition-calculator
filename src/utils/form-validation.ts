export const required = (value: string | number) => (value ? undefined : 'Required');

export const validGPA = (value: string | number) => {
  const gpa = Number(value);
  return gpa >= 0 && gpa <= 4 ? undefined : 'Invalid GPA';
};

export const validTestScore = (value: string | number) => {
  const testScore = Number(value);
  return testScore >= 0 && testScore <= 1600 ? undefined : 'Invalid test score';
};
