import Sequelize from "sequelize";
/*
mysqlConfig에서 export defalut를 사용하여 변수를 내보냈기 때문에
여기서 선언하는 config 변수는 {}를 사용하지 않는다
*/
import config from "../config/mysqlConfig.js";
import initModels from "./init-models.js";

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const db = initModels(sequelize);

/*
export {변수들}
한개의 파일(모듈)에서 다수(2개 이상)의 변수(또는 함수)를 내보낼때
*/

export { db, sequelize };
