const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "productdb",
    "postgres",
    "admin@123",       
    {
        host: "localhost",
        dialect: "postgres"
    }
);

sequelize.authenticate()
.then(() => {
    console.log("Database Connected Successfully");
})
.catch((err) => {
    console.log("Connection Error :", err);
});

module.exports = sequelize;