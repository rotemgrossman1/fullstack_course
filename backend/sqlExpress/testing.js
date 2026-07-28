const { Sequelize } = require('sequelize');
//[ 'postgres', 'sql_intro', 'sql_testing', 'bookstore' ]
const sequelize = new Sequelize('postgres://postgres:rotem12345@localhost:5432/postgres');
// async function showDatabases() {
//   try {
//     await sequelize.authenticate();

//     // Query system catalog for database names
//     const [results] = await sequelize.query(`
//       SELECT datname 
//       FROM pg_database 
//       WHERE datistemplate = false;
//     `);

//     const dbNames = results.map(row => row.datname);
//     console.log('Databases on this server:', dbNames);

//   } catch (error) {
//     console.error('Error fetching databases:', error);
//   } finally {
//     await sequelize.close();
//   }
// }

// showDatabases();
async function checkTables() {
  try {
    await sequelize.authenticate();
    console.log('Connected!');

    // Retrieve all table names in the connected database
    const tables = await sequelize.getQueryInterface().showAllTables();
    console.log('Tables in database:', tables);

  } catch (error) {
    console.error('Error fetching tables:', error);
  } finally {
    await sequelize.close(); // Close connection when done
  }
}
// //insert into company
// const Query = `
//   INSERT INTO company (name, industry, employees)
//   VALUES ('Amazon', 'Tech', 10000);
// `;
// sequelize
//     .query(Query)
//     .then(function ([result]) {
//         console.log(result)
//     }) 

// sequelize
//     .query("SELECT * FROM company")
//     .then(function ([results, metadata]) {
//         console.log(results)
//     })

//checkTables();
const addStudent = async (s_name, is_brilliant) => {
  let query = `
    INSERT INTO student (s_name, is_brilliant)
    VALUES ('${s_name}', ${is_brilliant});
  `;
  let result = await sequelize.query(query);
  return result[0];
};

const addTeacher = async function (t_name, is_tenured) {
  let query = `
    INSERT INTO teacher (t_name, is_tenured)
    VALUES ('${t_name}', ${is_tenured});
  `;
  let result = await sequelize.query(query);
  return result[0];
};

addStudent("Leonidis", true);
addTeacher("Yoda", false);