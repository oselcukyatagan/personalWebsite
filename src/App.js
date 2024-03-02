import './App.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import {Routes, Route} from "react-router-dom"
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
        <Header/>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>

    </div>
  );
}

export default App;
