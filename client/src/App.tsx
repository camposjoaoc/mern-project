import { useState } from "react";
import ItemList from "./components/itemList/ItemList";
import ItemForm from "./components/itemForm/ItemForm";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import './App.css';

function App() {
  const [activeComponent, setActiveComponent] = useState<"form" | "list" | null>(null);

  return (
    <div className="app-container">
      <div>
        <Navbar />
        <div className="app-card">
          <h1 className="app-title">Welcome to the Item Management App</h1>
          <p className="app-description">This app allows you to create and manage items.</p>
          <p className="app-note">Enjoy!</p>
          <div className="flex gap-4 justify-center mb-6">
            <button className="app-button" onClick={() => setActiveComponent("form")}>
              Register new Item
            </button>
            <button className="app-button" onClick={() => setActiveComponent("list")}>
              View all Items
            </button>
          </div>
          {activeComponent === "form" && <ItemForm />}
          {activeComponent === "list" && <ItemList />}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
