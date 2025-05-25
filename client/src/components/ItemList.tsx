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
    const fetchItems = async () => {
        try {
            const response = await axios.get("http://localhost:5001/items");
            setItems(response.data);
        } catch (error) {
            console.error("Error fetching items:", error);
        }
    };

    const deleteItem = async (id: string) => {
        try {
            await axios.delete(`http://localhost:5001/items/${id}`);
            setItems(items.filter(item => item._id !== id));
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div className="item-list-container">
            <h1 className="item-list-title">Item List</h1>
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
            {items.length === 0 && (
                <p className="item-list-empty">No items found.</p>
            )}
            <button className="item-list-refresh-btn" onClick={fetchItems}>
                Refresh
            </button>
        </div>
    );
};

export default ItemList;