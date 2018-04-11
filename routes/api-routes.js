var db = require("../models");

// Routes
module.exports = function (app) {

//   // Routes for GOALS

//   // Find all achievements GOALS
//   app.get("/api/achievements", function (req, res) {
//     db.achievement.findAll({
//       where: {
//         status: "Goal",
//       }
//     });
//   });

//   // Create a skill
//   app.post("/api/skills", function (req, res) {
//     db.skill.create({
//       skills_name: "",
//     }).then(function (skill) {

//       // Create an achievement
//       app.get("/api/achievements", function (req, res) {
//         // console.log(req.body);
//         db.achievement.create({
//           name: "",
//           type: "",
//           resource_name: "",
//           resource_URL: "",
//           comments: "",
//           status: ""
//         }).then(function (achievement) {
//           // res.json(achievements);

//           // Add the achievement to the skill
//           skill.addAchievement(achievement);
//         });
//       });
//     });
//   });

//   // Delete an achievement GOALS

//   // Routes for IN PROGRESS

//   // Find all achievements IN PROGRESS
//   app.get("/api/achievements", function (req, res) {
//     db.achievement.findAll({
//       where: {
//         status: "In progress",
//       }
//     });
//   });

//   // Routes for COMPLETED

//   // Find all achievements COMPLETED
//   app.get("/api/achievements", function (req, res) {
//     db.achievement.findAll({
//       where: {
//         status: "Completed",
//       }
//     });
//   });
// };

// // Jeff's example of many-to-many
//   // Here, I create a skill. You'd do this in one of your API routes,
//   // i.e. POST /api/skills
//   db.Skill.create({
//     name: 'HTML',
//     level: 9
//   }).then(function (skill) {

//     // Here, I create an achievement. Again, you'd do this in an API route,
//     // i.e. POST /api/achievements
//     db.Achievement.create({
//       name: 'UNCC Full-Stack Web Developer Bootcamp',
//       type: 1
//     }).then(function (achievement) {

//       // Here, I add the achievement to the skill.
//       skill.addAchievement(achievement);
//     });
//   });