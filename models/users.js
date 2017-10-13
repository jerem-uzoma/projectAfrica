import bcrypt from "bcryptjs";

module.exports = (sequelize, DataType) => {
    const Users = sequelize.define("Users", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        lastname: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        username: {
            type: DataType.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataType.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        profession: {
            type: DataType.STRING,
            unique: false
        },
        dob: {
            type: DataType.DATEONLY,
        },
        phoneNumber: {
            type: DataType.INTEGER,
            unique: true
        },
        stars: {
            type: DataType.INTEGER,
        },
        facebookId: {
            type: DataType.STRING,
            unique: true,
        },
        linkedInId: {
            type: DataType.STRING,
            unique: true,
        },
    }, {
        hooks: {
            beforeCreate: user => {
                const salt = bcrypt.genSaltSync();
                user.password = bcrypt.hashSync(user.password, salt);
            }
        },
        setterMethods: {
            fullname() {
                return this.firstname + ' ' + this.lastname
            }
        },
        classMethods: {
            associate: models => {
                Users.hasMany(models.Tasks);
                Users.hasMany(models.Project);
            },
            isPassword: (encodedPassword, password) => {
                return bcrypt.compareSync(password, encodedPassword);
            }
        }
    });
    return Users;
};