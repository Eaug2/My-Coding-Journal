// Dependencies
var express = require("express");
var db = require("../models");

var router = express.Router();
var path = require("path");

// HTML Route loads index.html
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

// API Routes

// Display achievements with status (goal, in-progress, completed). This works for all three routes.
router.get("/api/achievements/status/:status", function (req, res) {
  db.achievement.findAll({
    where: {
      status: req.params.status
    }
  }).then(function (result) {
    return res.json(result);
  });
});

router.put("/api/achievements/:id/status", function (req, res) {
  db.achievement.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(function(result) {
    res.json(result);
    // res.redirect("../views/index.html")
  });
});

// Create a skill in the skills table in database
router.post("/api/skills", function (req, res) {
  db.skill.create({
    skills_name: "",
  }).then(function (skill) {
  });
});

// Grab all the skills from the skills table in database
router.get("/api/skills", function(req, res) {
  db.skill.findAll({}).then(function(results) {
    res.json(results)
  });
});

// Grab all the achievements from the skills table in database
router.get("/api/achievements", function(req, res) {
  db.achievement.findAll({}).then(function(results) {
    res.json(results)
  });
});

// Create an achievement in the achievement table in database
router.post("/api/achievements", function (req, res) {
  // console.log(req.body.skills);
  db.achievement.create({
    name: req.body.name,
    type: req.body.type,
    resource_name: req.body.resource_name,
    resource_URL: req.body.resource_URL,
    comments: req.body.comments,
    status: req.body.status,
    skillsA: req.body.skillsA
  }).then(function (achievement) {
    // FUTURE DEVELOPMENT
    // Connect the skills and achievements as many-to-many - option 1
    // for (var i = 0; i < req.body.skills.length; i++) {
    //   achievement.addSkill(req.body.skills[i]);
    // }
    res.json(achievement);
  });
});

// FUTURE DEVELOPMENT
// // Connect the skills and achievements as many-to-many - option 2
// router.post("/api/achievements/:id/skills", function (req, res) {
//   var skillId = req.body.skillId;
//   var achievementId = req.params.id;

//   db.achievement.findById(achievementId).then(function(result) {
//     console.log(result);
//     result.addSkill(skillId);
//   });
// });

module.exports = router;