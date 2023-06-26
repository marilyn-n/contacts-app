import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
import Contacts from "./Pages/Contacts/Contacts";


const App = () => {
    return (
        <>
            <Router>
                <ul className="navbar-nav mr-auto">
                    <li><Link to={'/'} className="nav-link"> Home </Link></li>
                    <li><Link to={'/contacts'} className="nav-link">Contact</Link></li>
                </ul>
                <Routes>
                    <Route exact path='/' element={Dashboard} />
                    <Route path='/contacts' element={Contacts} />
                </Routes>
            </Router>
        </>
    )
}

export default App;