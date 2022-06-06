import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { handleChangeAmount, handleChangeScore } from '../redux/action';
import '../Styles/FinalScreen.css';

const FinalScreen = () => {
    const { score } = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleBackToSettings = () => {
        dispatch(handleChangeScore(0));
        dispatch(handleChangeAmount(10));
        navigate('/');
    }

    return (
        <>
            <div className="finalScreen">
                <h2>Final Score : {score}</h2>
                <button onClick={handleBackToSettings}>Back to settings</button>
            </div>
        </>
    )
}

export default FinalScreen