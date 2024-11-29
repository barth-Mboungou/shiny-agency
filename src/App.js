import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Home from './pages/home/Home'
import Survey from './pages/survey/survey'
import ClientForm from './components/ClientForm'
import FreelanceForm from './components/FreelanceForm'
import Error from './components/Error'
import Results from './pages/Results/Results'
import Freelance from './pages/Freelances/Freelenace'
// import Card from './components/Card/Card'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body {
      margin: 0;
    }
`



function App() {
  return (
    <>
      <Router>
        <GlobalStyle/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey/:questionNumber" element={<Survey />} />
          {/* Nous imbriquons nos composants dans survey */}
          <Route path="client" element={<ClientForm />} />
          <Route path="freelance" element={<FreelanceForm />} />
          <Route path="results" element={<Results/>} />
          <Route path="freelances" element={<Freelance/>} />
          {/* <Route path = "card" element={Card}/> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  )
}
export default App
