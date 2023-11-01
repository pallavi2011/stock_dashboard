import "./App.css";
import {useState} from 'react';
import Dashboard from "./components/Dashboard";
import ThemeContext from "./components/context/ThemeContext";
import StockContext from "./components/context/StockContext";

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [stockSymbol , setStockSymbol] = useState("AAPL")
  return (
  <ThemeContext.Provider value={{darkMode, setDarkMode}}>
    <StockContext.Provider value={{stockSymbol, setStockSymbol}}>
      <Dashboard />
    </StockContext.Provider>
  </ThemeContext.Provider>)
  ;
}

export default App;
