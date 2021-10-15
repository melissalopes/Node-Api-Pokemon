'use strict';
const ValorInvalido = require('../erros/valor.invalido')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pokemons.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function (dado){
          if( dado == "" || typeof dado === "number" ) throw new ValorInvalido('Nome');
        }
      }
    },
    tipo: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function (dado){
          if( dado == "" || typeof dado === "number" ) throw new ValorInvalido('Tipo');
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Pokemons',
  });
  return Pokemons;
};