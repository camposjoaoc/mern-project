import Item from '../models/itemModel.js';

// GET /items
export const getAllItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching items!' });
    }
};

// GET /items/name/laptop
export const getItemByName = async (req, res) => {
    try {
        const filteredItems = await Item.find({ name: "Laptop" });
        if (filteredItems.length === 0) {
            return res.status(404).json({ message: 'No items found!' });
        }
        res.json(filteredItems);
    } catch (error) {
        res.status(500).json({ message: 'Error filtering items!' });
    }
};

// GET /items/quantity/gt2
export const getItemByQuantity = async (req, res) => {
    try {
        const filteredItems = await Item.find({ quantity: { $gt: 2 } });
        if (filteredItems.length === 0) {
            return res.status(404).json({ message: 'No items found!' });
        }
        res.json(filteredItems);
    } catch (error) {
        res.status(500).json({ message: 'Error filtering items by Quantity!' });
    }
};

// GET /items/grouped
export const getGroupedItems = async (req, res) => {
    try {
        const groupedItems = await Item.aggregate([
            {
                $group: {
                    _id: "$item",
                    totalQuantity: { $sum: "$quantity" }
                }
            },
            {
                $sort: { _id: 1 }
            }
        ]);
        res.json(groupedItems);
    } catch (error) {
        res.status(500).json({ message: 'Error grouping items!' });
    }
}

// GET /items/count
export const getItemsCount = async (req, res) => {
    try {
        const countItems = await Item.countDocuments();
        if (countItems === 0) {
            return res.status(404).json({ message: 'No items found!' });
        }
        res.json({ totalItems: countItems });
    } catch (error) {
        res.status(500).json({ message: 'Error to count items!' });
    }
};

// GET /items/sorted/asc
export const getItemsSortedAsc = async (req, res) => {
    try {
        const sortedItems = await Item.find().sort({ item: 1 });
        if (sortedItems.length === 0) {
            return res.status(404).json({ message: 'No items found!' });
        }
        res.json(sortedItems);
    } catch (error) {
        res.status(500).json({ message: 'Error to sort items!' });
    }
};

// GET /items/sorted/dsc
export const getItemsSortedDesc = async (req, res) => {
    try {
        const sortedItems = await Item.find().sort({ item: -1 });
        if (sortedItems.length === 0) {
            return res.status(404).json({ message: 'No items found!' });
        }
        res.json(sortedItems);
    } catch (error) {
        res.status(500).json({ message: 'Error to sort items!' });
    }
};

// POST /items
export const createItem = async (req, res) => {
    try {
        const { name, quantity } = req.body;

        if (!name || quantity === undefined) {
            return res.status(400).json({ message: 'Item and quantity are required' });
        }

        const parsedQuantity = Number(quantity);
        if (isNaN(parsedQuantity) || parsedQuantity < 0) {
            return res.status(400).json({ message: 'Quantity must be a non-negative number' });
        }
        const newItem = new Item({ name, quantity: parsedQuantity });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ message: 'Error creating item' });
    }
};

// GET /items/:id
export const getItemById = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await Item.findById(id);

        if (!item) {
            return res.status(404).json({ message: 'Item not found!' });
        }

        res.json(item);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching item by ID!' });
    }
};

// PUT /items/:id
export const updateItemById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedItem = await Item.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: 'Error updating item' });
    }
};

// PATCH /items/:id
export const patchItemById = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await Item.updateOne(
            { _id: id },
            { $set: req.body });

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: 'Item not found' });
        }

        if (result.modifiedCount === 0) {
            return res.status(200).json({ message: 'No changes made to the item' });
        }

        res.status(200).json({ message: 'Item updated successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error updating item' });
    }
};

// DELETE /items/deleteMany
export const deleteManyItems = async (req, res) => {
    try {
        const result = await Item.deleteMany({ quantity: { $lt: 3 } });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'No items found to delete' });
        }
        res.json({ message: `${result.deletedCount} items deleted successfully` });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting items' });
    }
};

// DELETE /items/:id
export const deleteItemById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await Item.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting item' });
    }
};



