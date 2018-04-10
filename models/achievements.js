'use strict';
module.exports = (sequelize, DataTypes) => {
  var achievements = sequelize.define('achievements', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    resource_name: DataTypes.STRING,
    resource_URL: DataTypes.STRING,
    comments: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  achievements.associate = function(models) {
    achievements.belongsToMany(models.skills, {
      as: ["Skills"],
      through: ["SkillAchievement"]
    });
  };
  return achievements;
};



