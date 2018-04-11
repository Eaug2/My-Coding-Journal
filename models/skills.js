'use strict';
module.exports = (sequelize, DataTypes) => {
  var skills = sequelize.define('skill', {
    skills_name: DataTypes.STRING
  }, {});
  skills.associate = function(models) {
    skills.belongsToMany(models.achievement, {
      through: "SkillAchievement"
    });
  };
  return skills;
};