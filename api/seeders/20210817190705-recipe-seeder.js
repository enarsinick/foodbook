'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('Recipes', [{
        recipeId: 1,
        title: "Special Fried Rice",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis accumsan eros, at mollis ante vestibulum vel. Morbi tellus turpis, ultricies sed faucibus quis, scelerisque id sem. In ultricies dapibus interdum. Ut in eleifend ex.",
        estimatedTime: 45,
        category: "Chinese",
        instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis accumsan eros, at mollis ante vestibulum vel. Morbi tellus turpis, ultricies sed faucibus quis, scelerisque id sem. In ultricies dapibus interdum. Ut in eleifend ex.",
        ingredients: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis accumsan eros, at mollis ante vestibulum vel. Morbi tellus turpis, ultricies sed faucibus quis, scelerisque id sem. In ultricies dapibus interdum. Ut in eleifend ex.",
        tileImage: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADXSURBVDiNldM/S8JRFMbxD6FFBCY1OQQGgbT5AnJtaIjIpRfUqosvod29LXRxa3KIluYo08YSddAfXC7e6B44w3P+fOG53MM6ulhuyQUmeEYHJxKRAsQ5w2W4uJMiJqKCPs6KQikx+IAxjnGKa+xuege4x91fFm4iYAu/Qf8H1RwLQzwFuoyLHACMIt3IBUwifZQLWES6lAs4jPRXLqAZ6ZccwDmuAj3HgPRHurV+5X3U0MZe0O/jM1z47y0sMUW9WMy9hfeNlbeikLJQxBzfeMUjevgIB1ajRj3RATolfQAAAABJRU5ErkJggg==",
        coverImage: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADXSURBVDiNldM/S8JRFMbxD6FFBCY1OQQGgbT5AnJtaIjIpRfUqosvod29LXRxa3KIluYo08YSddAfXC7e6B44w3P+fOG53MM6ulhuyQUmeEYHJxKRAsQ5w2W4uJMiJqKCPs6KQikx+IAxjnGKa+xuege4x91fFm4iYAu/Qf8H1RwLQzwFuoyLHACMIt3IBUwifZQLWES6lAs4jPRXLqAZ6ZccwDmuAj3HgPRHurV+5X3U0MZe0O/jM1z47y0sMUW9WMy9hfeNlbeikLJQxBzfeMUjevgIB1ajRj3RATolfQAAAABJRU5ErkJggg==",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
      }]);
  },
};
