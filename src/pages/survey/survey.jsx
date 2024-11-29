import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Loader } from '../../utils/style/Atoms'

const SurveyContainer = styled.div`
  text-align: center;
  padding-top: 80px;
`
const QuestionTitle = styled.h1`
  text-decoration: underline;
`

const QuestionContent = styled.h2`
  font-size: 25px;
`
const LinkWrapper = styled.span`
  text-decoration: underline;
`

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1
  const [surveyData, setSurveyData] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)

  useEffect(() => {
    setDataLoading()
    fetch(`http://localhost:8000/survey`).then((response) =>
      response
        .json()
        .then(({ surveyData }) => {
          setSurveyData(surveyData)
          setDataLoading(false)
        })
        .catch((error) => console.log(error))
    )
  }, [])
  return (
    <>
      <SurveyContainer>
        <QuestionTitle>Question {questionNumber}</QuestionTitle>
        {isDataLoading ? (
          <Loader />
        ) : (
          <QuestionContent>{surveyData[questionNumber]}</QuestionContent>
        )}
        <LinkWrapper>
          <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
          {surveyData[questionNumberInt + 1] ? (
            <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
          ) : (
            <Link to="/results">Résultats</Link>
          )}
        </LinkWrapper>
      </SurveyContainer>
    </>
  )
}

export default Survey
