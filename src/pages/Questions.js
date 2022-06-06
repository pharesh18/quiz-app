import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useAxios from '../hooks/useAxios';
import Loader from '../Components/Loader';
import Error from '../Components/Error';
import '../Styles/Questions.css';
import { handleChangeScore } from '../redux/action';
import { useNavigate } from 'react-router-dom';
import { decode } from 'html-entities';

const generateRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

const Questions = () => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [options, setOptions] = useState([]);
    const {
        question_category,
        question_difficulty,
        question_type,
        amount_of_question,
        score
    } = useSelector(state => state);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    let apiUrl = `/api.php?amount=${amount_of_question}`;

    if (question_category) {
        apiUrl = apiUrl.concat(`&category=${question_category}`)
    }

    if (question_difficulty) {
        apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`)
    }

    if (question_type) {
        apiUrl = apiUrl.concat(`&type=${question_type}`)
    }

    const { response, error, loading } = useAxios({ url: apiUrl });
    useEffect(() => {
        if (response?.results.length) {
            const question = response.results[questionIndex];
            // console.log(question);
            let answer = [...question.incorrect_answers];
            // console.log(answer);
            answer.splice(generateRandomInt(question.incorrect_answers.length), 0, question.correct_answer);
            setOptions(answer);
        }
    }, [response, questionIndex])


    if (loading) {
        return (
            <Loader></Loader>
        )
    }

    if (error) {
        return (
            <Error></Error>
        )
    }

    // console.log(response);

    const handleClick = (e) => {
        e.preventDefault();
        const question = response.results[questionIndex];

        if (e.target.textContent === question.correct_answer) {
            dispatch(handleChangeScore(score + 1));
        }

        if (questionIndex + 1 < response.results.length) {
            setQuestionIndex(questionIndex + 1);
        } else {
            navigate('/score');
        }
    }
    return (
        <>
            <div className='questions'>
                <h2>Question {questionIndex + 1} </h2>
                <form action="">
                    <p>{decode(response.results[questionIndex].question)}</p>
                    {
                        options.map((data, id) => {
                            return (
                                <button key={id} onClick={handleClick}>{decode(data)}</button>
                            )
                        })
                    }
                    <p>Score : {score}/{response.results.length}</p>
                </form>
            </div>
        </>
    )
}

export default Questions