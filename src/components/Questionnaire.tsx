import React, { useState, useEffect } from 'react';
import { Button, Progress, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResultDocument from './ResultDocument';
import shi_questions_bank from "../assets/shi_questions_bank.json";
import './Questionnaire.scss'

const { Title } = Typography;
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("");

const Questionnaire = () => {
  const { t, i18n } = useTranslation();
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [allAnswers, setAllAnswers] = useState<string[]>([]);
  const [allQuestions, setAllQuestions] = useState(shi_questions_bank);
  const [isSurveyCompleted, setIsSurveyCompleted] = useState(false);
  const [scores, setScores] = useState({speech_score: 0, psychosocial_score: 0, total_score: 0})

  const submitAnswer= (answerId: string) => {
    setAllAnswers(allAnswers => {
      const newAllAnswers = allAnswers.concat(answerId);
      return newAllAnswers;
    })
    if(currentQuestionNumber +1  === allQuestions.length){
      setIsSurveyCompleted(true);
    }
    setCurrentQuestionNumber(currentQuestionNumber + 1);
  }

  const calculateScoreEffect = () => {
    let scoreMap = new Map([["a0", 0],["a1", 1], ["a2", 2],["a3",3],["a4",4] ]);
    var speech_score = 0;
    var psychosocial_score =0;
    var total_score = 0;
    allQuestions.forEach( (question,i) => {
      if(question.tags.indexOf('speech') !== -1){
        speech_score = speech_score + (scoreMap.get(allAnswers[i]) || 0);
      }
      if(question.tags.indexOf('psychosocial') !== -1){
        psychosocial_score = psychosocial_score + (scoreMap.get(allAnswers[i]) || 0);
      }
      total_score = total_score + (scoreMap.get(allAnswers[i]) || 0);
    })
    setScores({speech_score: speech_score, psychosocial_score: psychosocial_score, total_score: total_score});
  }

  useEffect(()=>{
    calculateScoreEffect();
  },[isSurveyCompleted])

  if(!isSurveyCompleted){
    return (
      <div className="questionnaireContainer">
        <Progress percent={Math.round(currentQuestionNumber * 100 / allQuestions.length)} />
        <Title level={3}>
          { t(allQuestions[currentQuestionNumber].questionTitle) }
        </Title>
        <div className="questionnaireChoicesContainer">
          {Object.entries(allQuestions[currentQuestionNumber].answers).map((answer, index) => {
            return (
                <Button className="choiceContainer" block={true} key={answer[0]} onClick={() => submitAnswer(answer[0])}> {t(answer[1])} </Button>
            ) 
          })}
        </div>
      </div>
    );
  } else {

    return (
      <div>
        <p>Total Score: {scores.total_score}</p>
        <p>Psychosocial Score: {scores.psychosocial_score}</p>
        <p>Speech Score: {scores.speech_score}</p>
        <PDFDownloadLink 
            document={
              <ResultDocument
                  totalScore={scores.total_score} 
                  psychosocialScore={scores.psychosocial_score}
                  speechScore={scores.speech_score}
              />
            } 
            fileName="shi-result.pdf"
        >
          {({ blob, url, loading, error }) => (loading ? 'Loading ...' : 'Download Result as PDF')}
        </PDFDownloadLink>
      </div>
    )
  }

}

export default Questionnaire;