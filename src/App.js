import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Home from './pages/home/Home'
import Survey from './pages/survey/survey'
// import ClientForm from './components/ClientForm'
// import FreelanceForm from './components/FreelanceForm'
import Error from './components/Error'
import Results from './pages/Results/Results'
import Freelance from './pages/Freelances/Freelenace'
// import Card from './components/Card/Card'
import { createGlobalStyle } from 'styled-components'
import Footer from './components/footer/footer'
import { SurveyProvider, ThemeProvider } from './utils/context'

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
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey/:questionNumber" element={<Survey />} />
            <Route path="/results" element={<Results />} />
            <Route path="/freelances" element={<Freelance />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
    </>
  )
}
export default App
