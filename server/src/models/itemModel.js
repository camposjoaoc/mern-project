import moongoose from 'mongoose';

// Define the schema for an item
const itemSchema = new moongoose.Schema({
    name: { type: String, required: true, minLenghth: 3 },
    quantity: { type: Number, required: true, min: 1 }
});

// Create the model from the schema
const Item = moongoose.model('Item', itemSchema);

// Export the model
export default Item;