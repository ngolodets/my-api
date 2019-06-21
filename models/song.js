'use strict';
module.exports = (sequelize, DataTypes) => {
  const song = sequelize.define('song', {
    songTitle: DataTypes.STRING,
    artist: DataTypes.STRING,
    album: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {});
  song.associate = function(models) {
    // associations can be defined here
  };
  return song;
};