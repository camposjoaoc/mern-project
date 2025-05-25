import express from 'express';
import {
    getAllItems,
    getItemByName,
    getItemByQuantity,
    getGroupedItems,
    getItemsCount,
    getItemsSortedAsc,
    getItemsSortedDesc,
    createItem,
    getItemById,
    updateItemById,
    patchItemById,
    deleteManyItems,
    deleteItemById
} from '../controllers/itemController.js';

const router = express.Router();
router.get('/items', getAllItems);
router.get('/items/name/:name', getItemByName);
router.get('/items/quantity/:quantity', getItemByQuantity);
router.get('/items/grouped', getGroupedItems);
router.get('/items/count', getItemsCount);
router.get('/items/sorted/asc', getItemsSortedAsc);
router.get('/items/sorted/desc', getItemsSortedDesc);
router.post('/items', createItem);
router.get('/items/:id', getItemById);
router.put('/items/:id', updateItemById);
router.patch('/items/:id', patchItemById); 
router.delete('/items/many', deleteManyItems);
router.delete('/items/:id', deleteItemById);

export default router; 