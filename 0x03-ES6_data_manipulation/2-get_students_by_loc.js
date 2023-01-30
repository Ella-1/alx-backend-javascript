/* eslint-disable linebreak-style */
const getStudentsByLocation = (students, city) => students.filter((student) => student.location === city);

export default getStudentsByLocation;
