'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Associate FoodItem with User in a many-to-one relationship
      // models.items.belongsTo(models.user, { foreignKey: 'userId' });
      models.items.belongsToMany(models.cart, { through: 'cartItem' });
    }
  }
  items.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    category: {
      type: DataTypes.ENUM,
      values: ['drinks', 'pizzas', 'soups', 'chinese', 'burgers', 'pastas'],
      allowNull: false
    },
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'items',
  });
  return items;
};