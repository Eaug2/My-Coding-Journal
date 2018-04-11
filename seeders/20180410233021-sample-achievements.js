'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("achievements", [{
      name: "Learn HTML",
      type: "Course",
      resource_name: "Code Academy",
      resource_URL: "http://www.codeacademy.com",
      comments: "Great course",
      status: "Completed"
    }, {
      name: "Build Websites from Scratch",
      type: "Course",
      resource_name: "Code Academy",
      resource_URL: "http://www.codeacademy.com",
      comments: "",
      status: "In-progress"                  
    }, {
      name: "Intro to SQL",
      type: "Course",
      resource_name: "Khan Academy",
      resource_URL: "http://www.khanacademy.org",
      comments: "Looks interesting",
      status: "Goal"
                          
    }, {
      name: "RecRec",
      type: "Project",
      resource_name: "Trilogy/UNCC",
      resource_URL: "",
      comments: "Project 1",
      status: "Completed"                
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("achievements", null, {});
  }
};
