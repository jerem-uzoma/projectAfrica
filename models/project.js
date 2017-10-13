module.exports = (sequelize, DataType) => {
    const Project = sequelize.define("Project", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        solved: {
            type: DataType.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        content: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        pay: {
            type: DataType.INTEGER,
            allowNull: true
        },
        upvotes: {
            type: DataType.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        downvotes: {
            type: DataType.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    }, {
        classMethods: {
            associate: (models) => {
                Project.belongsTo(models.Users);
            }
        }
    });
    return Project;
};