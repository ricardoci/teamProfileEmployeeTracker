const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Role = require('./Role');

class Employee extends Model {}

Employee.init(
  {
   
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
   
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
      max: 30,
      },
    
    },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
        max: 30,
        },
      
      },
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
      },
      
      manager_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        
     
      },
    },
      
    
 
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'employee',
  }
);

Employee.belongsTo(Role, { foreignKey: 'role_id' });
module.exports = Employee;
