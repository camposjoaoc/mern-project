import ItemList from "./components/ItemList"
import ItemForm from "./components/ItemForm"
import './App.css'

function App() {
  return (
    <div className="app-container">
      <div className="app-card">
        <h1 className="app-title">Welcome to the Item Management App</h1>
        <p className="app-description">This app allows you to create and manage items.</p>
        <p className="app-note">Enjoy!</p>
        <ItemForm />
        <ItemList />
      </div>
    </div>
  )
}

export default App
