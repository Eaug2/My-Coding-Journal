'use strict';
module.exports = (sequelize, DataTypes) => {
  var achievements = sequelize.define('achievement', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    resource_name: DataTypes.STRING,
    resource_URL: DataTypes.STRING,
    comments: DataTypes.STRING,
    status: DataTypes.STRING // This is what will be showing up with the list of goals
  }, {});
  achievements.associate = function(models) {
    achievements.belongsToMany(models.skill, {
      through: "SkillAchievement"
    });
  };
  return achievements;
};



