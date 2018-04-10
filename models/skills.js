'use strict';
module.exports = (sequelize, DataTypes) => {
  var skills = sequelize.define('skills', {
    skills_name: DataTypes.STRING
  }, {});
  skills.associate = function(models) {
    // associations can be defined here
  };
  return skills;
};