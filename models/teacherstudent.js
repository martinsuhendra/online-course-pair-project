'use strict';
module.exports = (sequelize, DataTypes) => {
  const TeacherStudent = sequelize.define('TeacherStudent', {
    TeacherId: DataTypes.INTEGER,
    StudentId: DataTypes.INTEGER
  }, {});
  TeacherStudent.associate = function(models) {
    // associations can be defined here
  };
  return TeacherStudent;
};