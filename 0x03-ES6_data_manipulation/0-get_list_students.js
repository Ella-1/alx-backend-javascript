/* eslint-disable linebreak-style */
const getListStudents = () => {
  const students = [];
  const student_1 = { id: 1, firstName: 'Guillaume', location: 'San Francisco' };
  const student_2 = { id: 2, firstName: 'James', location: 'Columbia' };
  const student_3 = { id: 5, firstName: 'Serena', location: 'San Francisco' };
  students.push(student_1, student_2, student_3);

  return students;
};

export default getListStudents;
