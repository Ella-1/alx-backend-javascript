/* eslint-disable linebreak-style */
const getListStudentIds = (listStudents) => {
  if (Array.isArray(listStudents) === false) {
    return [];
  }

  return listStudents.map((student) => student.id);
};

export default getListStudentIds;
