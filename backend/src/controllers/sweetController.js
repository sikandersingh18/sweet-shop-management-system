import * as Sweet from '../models/sweetModel.js';

export const addSweet = async (req, res) => {
  const sweet = await Sweet.createSweet(req.body);
  res.status(201).json(sweet);
};

export const getSweets = async (req, res) => {
  const sweets = await Sweet.getAllSweets();
  res.json(sweets);
};

export const searchSweets = async (req, res) => {
  const sweets = await Sweet.searchSweets(req.query);
  res.json(sweets);
};

export const updateSweet = async (req, res) => {
  const sweet = await Sweet.updateSweet(req.params.id, req.body);
  res.json(sweet);
};

export const deleteSweet = async (req, res) => {
  await Sweet.deleteSweet(req.params.id);
  res.json({ message: 'Sweet deleted successfully' });
};

export const purchaseSweet = async (req, res) => {
  const sweet = await Sweet.purchaseSweet(req.params.id);
  if (!sweet) {
    return res.status(400).json({ message: 'Out of stock' });
  }
  res.json(sweet);
};

export const restockSweet = async (req, res) => {
  const sweet = await Sweet.restockSweet(req.params.id, req.body.amount);
  res.json(sweet);
};
