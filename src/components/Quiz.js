import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import GameOver from './GameOver';

const QuizWindow = styled.div`
    text-align: center;
    font-size: clamp(20px, 2.5vw, 24px);
    margin-top: 10vh;
`;

const Options = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 2em auto;

    @media screen and (min-width: 1180px) {
        width: 50%;
    }
`;

const Option = styled.button`
    display: block;
    border: 1px solid #616A94;
    border-radius: 10px;
    padding: 15px 30px;
    text-decoration: none;
    color: #616A94;
    background-color: #161A31;
    transition: 0.3s;
    font-size: 1em;
    outline: none;
    user-select: none;
    margin-top: 1em;
    cursor: pointer;
    
    @media screen and (min-width: 1180px) {
        &:hover {
            color: white;
            background-color: #616A94;
        }
    }
`;

const Question = styled.div`
    width: 70%;
    margin: 0 auto;
`;

const Quiz = (props) => {

    const [quiz, setQuiz] = useState([]);
    const [number, setNumber] = useState(0);
    const [pts, setPts] = useState(0);
    const [loading, setLoading] = useState(true)
    const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

    const pickAnswer = (e) => {

        let userAnswer = e.target.outerText;

        if (quiz[number].answer === userAnswer) setPts(pts + 1);
        setNumber(number + 1);
        props.onClick(number + 1)
    }

    useEffect(() => {

        axios.get('https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple')
            .then(res => {
                setQuiz(res.data.results.map(item => (

                    {
                        question: item.question,
                        options: shuffle([...item.incorrect_answers, item.correct_answer]),
                        answer: item.correct_answer
                    }

                )));
                setLoading(false)
            })
            .catch(err => console.error(err))

    }, []);
    return (
        <>
            {/* <nav className="" style={{height:"60px", background:"red",display:"flex"}}>
      <h3 style={{display:"flex",alignItems:"center", marginLeft:"15px"}}>{number}/5</h3>
    </nav> */}
       
       {loading?<h1 style={{display:"flex",marginTop:"100px", justifyContent:"center",}}>Loading...</h1> :(<QuizWindow>
            { quiz[number] &&

                <>
                    <Question dangerouslySetInnerHTML={{ __html: quiz[number].question }}></Question>

                    <Options>
                        {quiz[number].options.map((item, index) => (
                            <Option key={index} dangerouslySetInnerHTML={{ __html: item }} onClick={pickAnswer}></Option>
                        ))}
                    </Options>
                </>

            }
            {
                number === 5 && <GameOver pts={pts} />
            }
        </QuizWindow>)}
        </>
    )
}

export default Quiz
