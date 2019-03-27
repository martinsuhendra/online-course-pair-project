'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   const promises = [queryInterface.removeColumn('Students', 'role', { type: Sequelize.STRING }),
   queryInterface.removeColumn('Students', 'skype', { type: Sequelize.STRING }),
   queryInterface.removeColumn('Teachers', 'skype', { type: Sequelize.STRING }),
   queryInterface.removeColumn('Teachers', 'role', { type: Sequelize.STRING }),
   queryInterface.removeColumn('Teachers', 'isLogin', { type: Sequelize.BOOLEAN })]
    
    return Promise.all(promises)
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   const deletePromises = [ queryInterface.addColumn('Students', 'role', { type: Sequelize.STRING }),
   queryInterface.addColumn('Students', 'skype', { type: Sequelize.STRING }),
   queryInterface.addColumn('Teachers', 'skype', { type: Sequelize.STRING }),
   queryInterface.addColumn('Teachers', 'role', { type: Sequelize.STRING }),
   queryInterface.addColumn('Teachers', 'isLogin', { type: Sequelize.BOOLEAN })]
  
    return Promise.all(deletePromises)
  }
};
