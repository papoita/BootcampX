//connect to databse
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'vagrant'
});

// writing SQL queries

pool.query(`
SELECT id, name, cohort_id
FROM students
LIMIT 5;
`)
.then(res => {
  res.rows.forEach(user=>{
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_id} cohort`);
  });
})
.catch(err => console.error('query error', err.stack));