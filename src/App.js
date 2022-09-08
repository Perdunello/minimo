import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";

const navLinkStyle={
    color:'black',
    border:'2px solid gray',
    padding:'10px',
    textDecoration:'none',
    background:'yellow'

}
function App() {
    return (
        <div className="App">
            <div style={{marginTop:'50px'}}>
                <NavLink style={navLinkStyle} to={'/1'}>First page</NavLink>
                <NavLink style={navLinkStyle} to={'/2'}>Second page</NavLink>
                <NavLink style={navLinkStyle} to={'/3'}>Third page</NavLink>
            </div>
            <Routes>
                <Route path={'/'} element={<FirstPage/>}/>
                <Route path="/1" element={<FirstPage/>}/>
                <Route path="/2" element={<SecondPage/>}/>
                <Route path="/3" element={<ThirdPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
