export const getMyAge = () => {
  const birthDate = new Date('2003-01-10');
  const today = new Date();
  return today.getFullYear() - birthDate.getFullYear();
};
