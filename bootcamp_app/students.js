//connect to databse
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'vagrant'
});

// writing SQL queries

// const myArgs = process.argv.slice(2);
// console.log('myArgs: ', myArgs);

pool.query(`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${process.argv[2]}%'
LIMIT ${process.argv[3] || 5};
`)
.then(res => {
  res.rows.forEach(user=>{
    console.log(`${user.name} has an id of ${user.student_id} and was in the cohort named ${user.cohort}`);
  });
})
.catch(err => console.error('query error', err.stack));