'use strict';
module.exports = (sequelize, DataTypes) => {
  const TeacherStudent = sequelize.define('TeacherStudent', {
    TeacherId: DataTypes.INTEGER,
    StudentId: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {
    hooks: {
      beforeCreate(data){
        data.date = data.date.toISOString().slice(0,10)
      }
    }
  });
  TeacherStudent.associate = function(models) {
    // associations can be defined here
  };
  return TeacherStudent;
};