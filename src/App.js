import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './components/header';
import Home from './pages/home/Home';
import Survey from './pages/survey/survey';
import ClientForm from './components/ClientForm';
import FreelanceForm from './components/FreelanceForm';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
        { /* Nous imbriquons nos composants dans survey */}
          <Route path="client" element={<ClientForm />} />
          <Route path="freelance" element={<FreelanceForm />} />
      </Routes>
     </Router>
    </>
  )
}
export default App;
