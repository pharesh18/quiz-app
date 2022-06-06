import React from 'react'
import { useNavigate } from 'react-router-dom';
import Error from '../Components/Error';
import InputField from '../Components/InputField';
import Loader from '../Components/Loader';
import SelectField from '../Components/SelectField'
import useAxios from '../hooks/useAxios';
import '../Styles/Settings.css';

const Settings = () => {
    const navigate = useNavigate();
    const { response, error, loading } = useAxios({ url: "/api_category.php" });

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

    const dificultyOptions = [
        { id: 'easy', name: 'Easy' },
        { id: 'medium', name: 'Medium' },
        { id: 'hard', name: 'Hard' },
    ]

    const typeOptions = [
        { id: 'multiple', name: "Multiple choice" },
        { id: "boolean", name: "True/False" }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/questions');
    }

    return (
        <>
            <div className="container">
                <h1>Quiz App</h1>
                <form action="" onSubmit={handleSubmit}>
                    <SelectField label="Category" options={response.trivia_categories}></SelectField>
                    <SelectField label="Difficulty" options={dificultyOptions}></SelectField>
                    <SelectField label="Type" options={typeOptions}></SelectField>
                    <InputField label="Amount of questions"></InputField>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Settings