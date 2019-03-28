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
    date: {
      type: DataTypes.DATE,
      validate: {
        isAfter: {args: new Date().toISOString(), msg: `can't book from the past...`}
      }
    },
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
        return sequelize.models.Teacher.findByPk(instance.TeacherId)
          .then((teacher)=> {
            if (teacher.totalReview == 0) {
              return teacher.update({
                totalReview : +teacher.totalReview + 1,
                rating: option.rating
              })
            } else {
              return sequelize.models.Teacher.findByPk(instance.TeacherId)
                .then((teacher)=> {
                  return teacher.update({
                    rating : parseFloat(((+teacher.rating + +option.rating) / 2)).toFixed(1)
                  })
                })
            }
          })
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