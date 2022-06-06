import React from 'react'
import { useDispatch } from 'react-redux'
import { handleChangeAmount } from '../redux/action';

const InputField = ({ label }) => {
    const dispatch = useDispatch();
    const handleChange = (e) => {
        dispatch(handleChangeAmount(e.target.value));
    }

    return (
        <>
            <div>
                <input type="number" placeholder='Amount of questions' onChange={handleChange} />
                <label htmlFor="">{label}</label>
            </div>
        </>
    )
}

export default InputField