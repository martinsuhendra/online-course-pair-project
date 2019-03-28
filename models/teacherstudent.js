'use strict';
module.exports = (sequelize, DataTypes) => {
  const TeacherStudent = sequelize.define('TeacherStudent', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    TeacherId: DataTypes.INTEGER,
    StudentId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    teacherRating: DataTypes.BOOLEAN,
    status: {
      type: DataTypes.STRING,
      validate : {
        isIn: [['pending', 'confirmed', 'reject']]
      }
    }
  }, {
    hooks: {
      beforeCreate(schedule){
        schedule.date = schedule.date
      },
      afterUpdate(instance, option) {
        instance.teacherRating = true
      }
    }
  });
  TeacherStudent.associate = function(models) {
    // associations can be defined here
    TeacherStudent.belongsTo(models.Teacher)
    TeacherStudent.belongsTo(models.Student)
  };
  return TeacherStudent;
};