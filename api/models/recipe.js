'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Recipe.belongsTo(models.User, {
        as: "owner",
        foreignKey: {
          fieldName: "userId",
          allowNull: false,
          validate: {
            notNull: {
              msg: "A recipe owner ID is required",
            },
            notEmpty: {
              msg: "Please provide a recipe owner ID"
            }
          }
        }
      })
    }
  };
  Recipe.init({
    recipeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING, 
      allowNull: false, 
      validate: {
        notNull: {
          msg: "Please provide a title"
        },
        notEmpty: {
          msg: "Please provide a valid title"
        }
      }
    }, 
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please provide a description"
        },
        notEmpty: {
          msg: "Please provide a valid description"
        }
      }
    }, 
    estimatedTime: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
      validate: {
        notNull: {
          msg: "Please provide an estimated time in minutes (e.g 20mins)"
        },
        notEmpty: {
          msg: "Please provide a valid time in minutes (e.g 20mins)"
        }
      }
    }, 
    category: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please specify which category this recipe falls under"
        },
        notEmpty: {
          msg: "A category is needed"
        }
      }
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please provide the cooking instructions"
        },
        notEmpty: {
          msg: "Please provide a valid set of cooking instructions"
        }
      }
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please provide the ingredients"
        },
        notEmpty: {
          msg: "Please provide a valid set of ingredients"
        }
      }
    },
    tileImage: {
      type: DataTypes.BLOB('long'), 
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please add a tile image for the recipe"
        },
        notEmpty: {
          msg: "Please add a valid tile image for the recipe"
        }
      }
    },
    coverImage: {
      type: DataTypes.BLOB('long'),
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please add a cover image for the recipe"
        },
        notEmpty: {
          msg: "Please add a valid cover image for the recipe"
        }
      }
    }

  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};