import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { adminOnly } from '../middleware/roleMiddleware.js';
import {
  addSweet,
  getSweets,
  searchSweets,
  updateSweet,
  deleteSweet,
  purchaseSweet,
  restockSweet
} from '../controllers/sweetController.js';

const router = express.Router();

router.post('/', protect, adminOnly, addSweet);
router.get('/', protect, getSweets);
router.get('/search', protect, searchSweets);
router.put('/:id', protect, adminOnly, updateSweet);
router.delete('/:id', protect, adminOnly, deleteSweet);
router.post('/:id/purchase', protect, purchaseSweet);
router.post('/:id/restock', protect, adminOnly, restockSweet);

export default router;
