import { useState, useEffect } from "react";
import axios from "axios";
import "./ItemList.css";


type Item = {
    _id: string;
    name: string;
    quantity: number;
};

const ItemList = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [searchName, setSearchName] = useState("");
    const [searchQuantity, setSearchQuantity] = useState<number | "">("");
    const [error, setError] = useState("");

    const fetchItems = async () => {
        try {
            const response = await axios.get("https://mern-project-vert-ten.vercel.app/api/items");
            setItems(response.data);
            setError("");
        } catch (error) {
            setError("Error fetching items");
            setItems([]);
        }
    };

    const fetchByName = async () => {
        try {
            const response = await axios.get(`https://mern-project-vert-ten.vercel.app/api/items/name/${searchName}`);
            setItems(response.data);
            setError("");
        } catch (error) {
            setError("No items found with this name.");
            setItems([]);
        }
    };

    const fetchByQuantity = async () => {
        try {
            const response = await axios.get(`https://mern-project-vert-ten.vercel.app/api/items/quantity/${searchQuantity}`);
            setItems(response.data);
            setError("");
        } catch (error) {
            setError("No items found with this quantity.");
            setItems([]);
        }
    };

    const deleteItem = async (id: string) => {
        try {
            await axios.delete(`https://mern-project-vert-ten.vercel.app/api/items/${id}`);
            setItems(items.filter(item => item._id !== id));
        } catch (error) {
            setError("Error deleting item");
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div className="item-list-container">
            <h1 className="item-list-title">Item List</h1>
            <div className="flex gap-2 mb-4">
                <input
                    className="item-list-input"
                    type="text"
                    placeholder="Search by name"
                    value={searchName}
                    onChange={e => setSearchName(e.target.value)}
                />
                <button className="item-list-action-btn" onClick={fetchByName} disabled={!searchName}>
                    Filter by Name
                </button>
                <input
                    className="item-list-input"
                    type="number"
                    placeholder="Quantity >"
                    value={searchQuantity}
                    onChange={e => setSearchQuantity(e.target.value ? parseInt(e.target.value) : "")}
                    min={1}
                />
                <button className="item-list-action-btn" onClick={fetchByQuantity} disabled={!searchQuantity}>
                    Filter by Quantity
                </button>
                <button className="item-list-refresh-btn" onClick={fetchItems}>
                    Show All
                </button>
            </div>
            {error && <div className="item-list-error">{error}</div>}
            <table className="item-list-table">
                <thead>
                    <tr>
                        <th className="item-list-th">Name</th>
                        <th className="item-list-th">Quantity</th>
                        <th className="item-list-th">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item._id}>
                            <td className="item-list-td">{item.name}</td>
                            <td className="item-list-td">{item.quantity}</td>
                            <td className="item-list-td">
                                <button
                                    className="item-list-action-btn"
                                    onClick={() => deleteItem(item._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {items.length === 0 && !error && (
                <p className="item-list-empty">No items found.</p>
            )}
        </div>
    );
};

export default ItemList;