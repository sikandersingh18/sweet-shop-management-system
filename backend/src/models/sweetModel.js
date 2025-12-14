import db from '../db.js';

export const createSweet = async ({ name, category, price, quantity }) => {
  const result = await db.query(
    `INSERT INTO sweets (name, category, price, quantity)
     VALUES ($1,$2,$3,$4)
     RETURNING *`,
    [name, category, price, quantity]
  );
  return result.rows[0];
};

export const getAllSweets = async () => {
  const result = await db.query('SELECT * FROM sweets ORDER BY id');
  return result.rows;
};

export const searchSweets = async ({ name, category, minPrice, maxPrice }) => {
  let query = 'SELECT * FROM sweets WHERE 1=1';
  const values = [];

  if (name) {
    values.push(`%${name}%`);
    query += ` AND name ILIKE $${values.length}`;
  }

  if (category) {
    values.push(category);
    query += ` AND category = $${values.length}`;
  }

  if (minPrice) {
    values.push(minPrice);
    query += ` AND price >= $${values.length}`;
  }

  if (maxPrice) {
    values.push(maxPrice);
    query += ` AND price <= $${values.length}`;
  }

  const result = await db.query(query, values);
  return result.rows;
};

export const findSweetById = async (id) => {
  const result = await db.query('SELECT * FROM sweets WHERE id=$1', [id]);
  return result.rows[0];
};

export const updateSweet = async (id, { name, category, price, quantity }) => {
  const result = await db.query(
    `UPDATE sweets
     SET name=$1, category=$2, price=$3, quantity=$4
     WHERE id=$5
     RETURNING *`,
    [name, category, price, quantity, id]
  );
  return result.rows[0];
};

export const deleteSweet = async (id) => {
  await db.query('DELETE FROM sweets WHERE id=$1', [id]);
};

export const purchaseSweet = async (id) => {
  const result = await db.query(
    `UPDATE sweets
     SET quantity = quantity - 1
     WHERE id=$1 AND quantity > 0
     RETURNING *`,
    [id]
  );
  return result.rows[0];
};

export const restockSweet = async (id, amount) => {
  const result = await db.query(
    `UPDATE sweets
     SET quantity = quantity + $1
     WHERE id=$2
     RETURNING *`,
    [amount, id]
  );
  return result.rows[0];
};
