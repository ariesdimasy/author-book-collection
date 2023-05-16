'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      book.belongsTo(models.author,{ 
        foreignKey:"author_id"
      })
    }
  }
  book.init({
    title: DataTypes.STRING,
    release_date: DataTypes.DATE,
    author_id : {
      type:DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};

