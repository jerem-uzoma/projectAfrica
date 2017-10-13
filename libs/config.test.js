module.exports = {
  database: "ntask_test",
  username: "uzoma",
  password: "kappax40",
  params: {
    dialect: "postgres",
    logging: false,
    define: {
      underscored: true
    }
  },
  jwtSecret: "NTASK_TEST",
  jwtSession: {session: false}
};
