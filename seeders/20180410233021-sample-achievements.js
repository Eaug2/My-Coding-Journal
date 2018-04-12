'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("skills", [{
      name: "Web Accessibility 101 Bootcamp Training",
      type: "Workshop",
      resource_name: "Girl DevelopIT",
      resource_URL: "https://www.meetup.com/GDI-CLT/events/248765534/?rv=ea1&_xtd=gatlbWFpbF9jbGlja9oAJDM3OGFkMDUzLTBlM2YtNDM5MS05MDhiLTU0N2VkNzdkNDE2Yw",
      comments: "Front-end Web Development",
      status: "Goal"
    }, {
      name: "JavaScript: The Good Parts by Douglas Crockford",
      type: "Book",
      resource_name: "O'Reilly/Yahoo Press",
      resource_URL: "http://shop.oreilly.com/product/9780596517748.do",
      comments: "Interesting. Old from 2008.",
      status: "Goal"                  
    }, {
      name: "Intro to Git and GitHub",
      type: "Workshop",
      resource_name: "Girl DevelopIT",
      resource_URL: "https://www.meetup.com/GDI-CLT/events/249127606/?gj=wcs1_e&rv=wcs1_e&_xtd=gatlbWFpbF9jbGlja9oAJGJjMTkwZTE4LTg2YmItNDRmOC1hYjVlLTE5N2JjNmFmOTMwOQ&_af=event&_af_eid=249127606",
      comments: "Inexpensive review of GitHub. Looks good for networking.",
      status: "Goal"                     
    }, {
      name: "Deploy a Website",
      type: "Course",
      resource_name: "Code Academy",
      resource_URL: "https://www.codecademy.com/catalog/subject/web-development",
      comments: "New technologies",
      status: "Goal"                
    }, {
      name: "Build Front-End Web Applications from Scratch",
      type: "Course",
      resource_name: "Code Academy",
      resource_URL: "https://www.codecademy.com/catalog/subject/web-development",
      comments: "Good Practice!",
      status: "Goal"                
    }, {
      name: "Full Stack Flex Program",
      type: "Course",
      resource_name: "Trilogy/UNCC",
      resource_URL: "https://bootcamp.uncc.edu/coding/",
      comments: "Full Stack Web Development",
      status: "In-progress"                
    }, {
      name: "Project 2: My Coding Journal",
      type: "Project",
      resource_name: "Trilogy/UNCC",
      resource_URL: "https://fast-mountain-46606.herokuapp.com/",
      comments: "Our 2nd Team Project",
      status: "In-progress"                
    }, {
      name: "A Smarter Way to Learn JavaScript by Mark Myers",
      type: "Book",
      resource_name: "Mark Myers",
      resource_URL: "http://www.asmarterwaytolearn.com/js/index-of-exercises.html",
      comments: "Great practice!",
      status: "In-progress"                
    }, {
      name: "Introduction to JavaScript",
      type: "Course",
      resource_name: "Code Academy",
      resource_URL: "https://www.codecademy.com/catalog/subject/web-development",
      comments: "JavaScript is difficult.",
      status: "In-progress"                
    }, {
      name: "Introduction to Jquery",
      type: "Course",
      resource_name: "Code Academy",
      resource_URL: "https://www.codecademy.com/catalog/subject/web-development",
      comments: "Jquery makes life easier.",
      status: "In-progress"                
    }, {               
      name: "Learn HTML",
      type: "Course",
      resource_name: "Code Academy",
      resource_URL: "https://www.codecademy.com/catalog/subject/web-development",
      comments: "Great course!",
      status: "Completed"                
    }, {               
      name: "Learn CSS",
      type: "Course",
      resource_name: "Code Academy",
      resource_URL: "https://www.codecademy.com/catalog/subject/web-development",
      comments: "Good introduction",
      status: "Completed"                
    }, {               
      name: "Intro to HTML/CSS",
      type: "Course",
      resource_name: "Khan Academy",
      resource_URL: "https://www.khanacademy.org/",
      comments: "Excellent refresher course.",
      status: "Completed"                
    },{
      name: "HTML/JS: Making Webpages Interactive",
      type: "Course",
      resource_name: "Khan Academy",
      resource_URL: "https://www.khanacademy.org/",
      comments: "Good course",
      status: "Completed"                
    }, {
      name: "Project 1: RecRec App",
      type: "Project",
      resource_name: "Trilogy/UNCC",
      resource_URL: "https://bradleyaw.github.io/RecRec/",
      comments: "Our 1st Team Project",
      status: "Completed"                
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("achievements", null, {});
  }
};
