import './AddTask.css'
import React, { useState } from 'react';

export function AddTask({setShowModal}) {
    return <div className='addTask'>
        <button id='addBtn' onClick={() => setShowModal(true)}> Add Task </button>
    </div>
}