var express = require("express");

var router = express.Router();

var db = require("../models");

// Routes

// Find all achievements with status
router.get("/api/achievements/status/:status", function (req, res) {
  db.achievement.findAll({
    where: {
      status: req.params.status
    }
  }).then(function (result) {
    return res.json(result);
  });
});

// Create a skill
router.post("/api/skills", function (req, res) {
  db.skill.create({
    skills_name: "",
  }).then(function (skill) {
  });
});

router.get("/api/skills", function(req, res) {
  db.skill.findAll({}).then(function(results) {
    res.json(results)
  });
});

// Create an achievement
router.post("/api/achievements", function (req, res) {
  // console.log(req.body);
  db.achievement.create({
    name: "",
    type: "",
    resource_name: "",
    resource_URL: "",
    comments: "",
    status: ""
  }).then(function (achievement) {
    for (var i = 0; i < req.body.skills.length; i++) {
      achievement.addSkill(req.body.skills[i]);
    }
    res.json(achievement);
  });
});

router.post("/api/achievements/:id/skills", function (req, res) {
  var skillId = req.body.skillId;
  var achievementId = req.params.id;

  db.achievement.findById(achievementId).then(function(result) {
    console.log(result);
    result.addSkill(skillId);
  });

});

module.exports = router;