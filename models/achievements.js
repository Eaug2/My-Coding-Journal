'use strict';
module.exports = (sequelize, DataTypes) => {
  var achievements = sequelize.define('achievement', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    resource_name: DataTypes.STRING,
    resource_URL: DataTypes.STRING,
    comments: DataTypes.STRING,
    status: DataTypes.STRING,
    skillsA: DataTypes.STRING
  }, {});
  achievements.associate = function(models) {
    achievements.belongsToMany(models.skill, {
      through: "SkillAchievement"
    });
  };
  return achievements;
};



