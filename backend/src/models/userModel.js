import db from '../db.js';

export const createUser = async (name, email, password, role = 'USER') => {
  const result = await db.query(
    'INSERT INTO users (name, email, password, role) VALUES ($1,$2,$3,$4) RETURNING *',
    [name, email, password, role]
  );
  return result.rows[0];
};

export const findUserByEmail = async (email) => {
  const result = await db.query(
    'SELECT * FROM users WHERE email=$1',
    [email]
  );
  return result.rows[0];
};
