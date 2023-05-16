'use strict';
module.exports = (sequelize, DataTypes) => {
  const author = sequelize.define('author', {
    username: { 
      type:DataTypes.STRING
    },
    name: { 
      type:DataTypes.STRING,
    },
    email:  {
      type:DataTypes.STRING
    },
    password: {
      type:DataTypes.STRING
    },
    birthdate: { 
      type:DataTypes.DATE
    },
    biography: {
      type:DataTypes.STRING
    }

  }, {});
  author.associate = function(models) {
    // associations can be defined here
    author.hasMany(models.book,{
      foreignKey:"author_id"
    })
  };
  return author;
};