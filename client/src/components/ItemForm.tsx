import { useState } from "react";
import axios from "axios";
import "./ItemForm.css";

export const ItemForm = () => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [error, setError] = useState("");

    const createItem = async () => {
        try {
            await axios.post("http://localhost:5001/items", { name, quantity });
            alert("Item created successfully!");
        } catch (error) {
            console.error("Error creating item:", error);
            setError("Failed to create item. Please try again.");
        }
    }

    return (
        <div className="item-form-container">
            <h1 className="item-form-title">Create Item</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                createItem();
            }}>
                <div>
                    <label className="item-form-label">Name:</label>
                    <input
                        className="item-form-input"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="item-form-label">Quantity:</label>
                    <input
                        className="item-form-input"
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                        min="1"
                        required
                    />
                </div>
                {error && <p className="item-form-error">{error}</p>}
                <button type="submit" className="item-form-button">Create Item</button>
            </form>
        </div>
    )
}

export default ItemForm;