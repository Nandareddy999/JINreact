import React from 'react'
import "./Content.css"

function Content() {
    
    return (
        <div className='body-content'>
            <h1>Timesheet</h1>
            <div className='time1'>
                <p className='hours'>Total Hours : 0.0</p>
                <p><button>{'<'}</button>
                    {' 28 Jan 2024 - 3 Feb 2024 '}
                    <button>{'>'}</button></p>
            </div>
            <div className='select-content'>
                <p>Allocation Extension</p>
                <button>{'⇵'}</button>
            </div>
            <div className='sheet-content'>
                <p>Timesheet</p>
                <table className='table'>
                    <thead className='table-head'>
                        <th>Project Type</th>
                        <th>Project Name</th>
                        <th>Task</th>
                        <th>Comment</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                        <th>Sun</th>
                        <th>Total</th>
                        <th></th>
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default Content;