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
      skills_name: "Team-Member"
    }, {
      skills_name: "Node.js"
    }, {
      skills_name: "Migrations"
    }, {
      skills_name: "MySQL"
    }, {
      skills_name: "Web-Design"
    }, {
      skills_name: "Team-Leader"
    }, {
      skills_name: "Jquery"
    }, {
      skills_name: "MVC"
    }, {
      skills_name: "HTML"
    },  {
      skills_name: "APIs"
    }, {
      skills_name: "Moment.js"
    }, {
      skills_name: "Bootstrap"
    }, {
      skills_name: "Materialize"
    }, {
      skills_name: "Git"
    }, {
      skills_name: "GitHub"
    }, {
      skills_name: "User-Validation"
    }, {
      skills_name: "Mobile-Responsive"
    }, {
      skills_name: "Web-Accessibility"
    }, {
      skills_name: "Jekyll"
    }, {
      skills_name: "AWS"
    }, {
      skills_name: "React.js"
    }, {
      skills_name: "Handlebars"
    }, {
      skills_name: "Firebase"
    }, {
      skills_name: "MongoDB"
    }, {
      skills_name: "Design-Patterns"
    }, {
      skills_name: "Responsive-Design"
    }, {
      skills_name: "Algorithms"
    }, {
      skills_name: "Sequelize"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("skills", null, {});
  }
};
