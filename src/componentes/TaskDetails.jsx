import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from './Button'

import './TaskDetails.css'

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackClick = () => {
        history.goBack();
    }

    return ( 
        <>
            <div className='back-button-container'>
                <Button onClick={handleBackClick}>Voltar</Button>
            </div>
            <div className='task-details-container'>
                <h2>{params.taskTitle}</h2>
                <p>
                    AAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAA 
                    AAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAA
                </p>
            </div>
        </>

     );
}
 
export default TaskDetails;