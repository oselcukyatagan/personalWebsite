import '../Styles/App.css';
import HomePage from '../Pages/HomePage';
import ContactPage from '../Pages/ContactPage';
import EEProjectsPage from "../Pages/EEProjectsPage";
import {Routes, Route} from "react-router-dom"
import Header from "./Header";

function App() {
  return (
    <div className="App">
        <Header/>

        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/EEProjects" element={<EEProjectsPage/>}></Route>
        </Routes>

    </div>
  );
}

export default App;
