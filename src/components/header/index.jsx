import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>
      <nav>
        <Link to="/" >Accueil</Link>
        <Link to="/survey/42">Questionnaire</Link>
      </nav>
    </div>
  )
}

export default Header
