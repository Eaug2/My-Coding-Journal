'use strict';
module.exports = (sequelize, DataTypes) => {
  var skills = sequelize.define('skills', {
    skills_name: DataTypes.STRING
  }, {});
  skills.associate = function(models) {
    skills.belongsToMany(achievements, {
      as: ["Achievements"],
      through: ["SkillAchievement"],
    });
  };
  return skills;
};