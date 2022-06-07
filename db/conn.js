const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodemvc", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("conectado");
} catch (error) {
  console.log(`Sem conexao : ${error}`);
}

module.exports = sequelize;
