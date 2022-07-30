import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./component/Login";
import Redirect from "./component/Redirect";
import Home from "./component/Home";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/redirect" element={<Redirect/>}/>
                    <Route path="/authorized" element={<Redirect/>}/>
                    <Route path="/home" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
