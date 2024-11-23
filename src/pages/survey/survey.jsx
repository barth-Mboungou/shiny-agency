import { Link, Outlet } from "react-router-dom"

function Survey() {
  return (
      <>
          <h1>Questionnaire 🧮</h1>
          <Link to="client">Questionnaire client</Link>
          <Link to="freelancer">Questionnaire freelancer</Link>
          <Outlet/>
      </>
  )
}

export default Survey