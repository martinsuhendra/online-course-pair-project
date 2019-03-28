'use strict';
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    first_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please fill the blank'
        }
      }
    },
    last_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please fill the blank'
        }
      }
    },
    gender: {
      type: DataTypes.STRING,
      validate: {
        isIn: [['male', 'female']]
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Please put the correct email format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please fill the blank'
        },
        len: {
          args: [5],
          msg: 'Password minimum five character'
        }
      }
    },
    instrument: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please fill the blank'
        }
      }
    },
    rating : {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        min: {args: 1, msg:`rating must between 1 - 5`},
        max: {args: 5, msg:`rating must between 1 - 5`}
      }
    },
    totalReview : {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    tags : {
      type: DataTypes.STRING
    }
  }, {
    hooks: {
      beforeCreate(teacher) {
        const salt = bcrypt.genSaltSync();
        teacher.password = bcrypt.hashSync(teacher.password, salt)
      }
    }
  });
  Teacher.associate = function(models) {
    // associations can be defined here
    Teacher.belongsToMany(models.Student,{through: models.TeacherStudent})
  };

  Teacher.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  }

  Teacher.prototype.getFullName = function(){
    return `${this.first_name} ${this.last_name}`
  }

  return Teacher;
};