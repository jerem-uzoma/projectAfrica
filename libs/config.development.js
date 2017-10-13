import logger from "./logger.js";

module.exports = {
  database: "ntask",
  username: "uzoma",
  password: "kappax40",
  params: {
    dialect: "postgres",
    logging: (sql) => {
      logger.info(`[${new Date()}] ${sql}`);
    },
    define: {
      underscored: true
    }
  },
  jwtSecret: "Nta$K-AP1",
  jwtSession: {session: false}
};
