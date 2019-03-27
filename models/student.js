'use strict';
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
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
    }
  }, {
    hooks: {
      beforeCreate(student) {
        const salt = bcrypt.genSaltSync();
        student.password = bcrypt.hashSync(student.password, salt)
      }
    }
  });
  Student.associate = function(models) {
    // associations can be defined here
  };
  Student.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  }
  return Student;
};