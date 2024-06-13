module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("Stores", "telephone", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn("Stores", "address", {
        type: Sequelize.STRING,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("tableName", "columnName1"),
      queryInterface.removeColumn("tableName", "columnName2"),
    ]);
  },
};
