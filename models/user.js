'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'Not a valid email',
        },
      },
    }, 
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [8, 24],
          msg: 'Password needs to be between 8-24 characters',
        },
      },
    },
    username: DataTypes.STRING,
    dob: DataTypes.DATE,
    bio: DataTypes.TEXT,
    admin: DataTypes.BOOLEAN,
    image: {
      type: DataTypes.TEXT,
      validate: {
        isUrl: {
          msg: 'Image needs to be a url',
        },
      },
    }, 
  }, {
    hooks: {
      beforeCreate: function(pendingUser) {
        if(pendingUser) {
          pendingUser.password = bcrypt.hashSync(pendingUser.password, 12);
        }
      },
    },
  });
  user.associate = function(models) {
    // associations can be defined here
  };
  user.prototype.isValidPassword = function (typedInPassword) {
    return bcrypt.compareSync(typedInPassword, this.password);
  };
  return user;
};