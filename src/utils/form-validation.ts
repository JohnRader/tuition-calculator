import type { ComboBoxValue } from '@/types';

export const requiredTextfield = (value: string | number) => {
  if (value) {
    return undefined;
  }

  return 'Required';
};

export const requiredComboBox = (value: ComboBoxValue) => {
  if (!value) {
    return 'Required';
  }

  if (!value.label || !value.value) {
    return 'Valid state is required';
  }

  if (value.label && value.value) {
    return undefined;
  }

  return 'Required';
};

export const validGPA = (value: string) => {
  const gpa = Number(value);
  return gpa >= 0 && gpa <= 4 ? undefined : 'Invalid GPA';
};

export const validTestScore = (value: string) => {
  const testScore = Number(value);
  return testScore >= 0 && testScore <= 1600 ? undefined : 'Invalid test score';
};
