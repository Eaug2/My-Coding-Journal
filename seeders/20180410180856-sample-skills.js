'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("skills", [{
      skills_name: "HTML5"
    }, {
      skills_name: "CSS"
    }, {
      skills_name: "Javascript"
    }, {
      skills_name: "Storyboarding"
    }, {
      skills_name: "Team member"
    }, {
      skills_name: "Node.js"
    }, {
      skills_name: "Migrations"
    }, {
      skills_name: "MySQL"
    }, {
      skills_name: "Web Design"
    }, {
      skills_name: "Sequelize"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("skills", null, {});
  }
};
