import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Loader } from '../../utils/style/Atoms'
import { SurveyContext } from '../../utils/context'
import colors from '../../utils/style/colors'

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

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  `

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1
  const [surveyData, setSurveyData] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)
  const { saveAnswers, answers } = useContext(SurveyContext)

  function saveReply(answer){
    saveAnswers({[questionNumber]: answer})
  }

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
        {answers && (
        <ReplyWrapper>
          <ReplyBox
            onClick={() => saveReply(true)}
            isSelected={answers[questionNumber] === true}
          >
            Oui
          </ReplyBox>
          <ReplyBox
            onClick={() => saveReply(false)}
            isSelected={answers[questionNumber] === false}
          >
            Non
          </ReplyBox>
        </ReplyWrapper>
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
