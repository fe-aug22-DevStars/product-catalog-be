// id, name

import {sequelize} from "../utils/db";
import {DataTypes} from "sequelize";

export const Color = sequelize.define('color', {
    id: {
        field: 'id',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        field: 'name',
        type: DataTypes.STRING,
    },
}, {
    tableName: 'colors',
})