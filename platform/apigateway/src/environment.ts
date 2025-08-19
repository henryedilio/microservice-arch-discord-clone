const environment = {
  port: Number(process.env.PORT) || 3000,
  AUTHSERVICEURL: process.env.AUTHSERVICEURL || "http://localhost:5000",
  NODE_ENV: process.env.NODE_ENV || "development",
};

export default environment;
