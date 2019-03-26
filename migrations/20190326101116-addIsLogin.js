'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   const promises = [
    queryInterface.addColumn('Teachers', 'isLogin', { type: Sequelize.BOOLEAN, defaultValue: false}),
    queryInterface.addColumn('Teachers', 'role', { type: Sequelize.STRING}),
    queryInterface.addColumn('Students', 'role', { type: Sequelize.STRING})
   ]
    return Promise.all(promises)
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   const deletePromises = [
     queryInterface.removeColumn('Teachers', 'isLogin', { type: Sequelize.BOOLEAN, defaultValue: false}),
     queryInterface.removeColumn('Teachers', 'role', { type: Sequelize.STRING}),
     queryInterface.removeColumn('Students', 'role', { type: Sequelize.STRING})
   ]
   return Promise.all(deletePromises)
  }
};
