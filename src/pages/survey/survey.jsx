import { useEffect } from "react"
import { Link, Outlet } from "react-router-dom"
import { useParams } from "react-router-dom"

function Survey() {

  useEffect(()=>{
    fetch(`http://localhost:8000/survey`)
  })
  const {questionNumber} = useParams()
  return (
      <>
          <h1>Questionnaire 🧮</h1>
          <h2>Question {questionNumber}</h2>
          <Link to="client">Questionnaire client</Link>
          <Link to="freelancer">Questionnaire freelancer</Link>
          <Outlet/>
      </>
  )
}

export default Survey