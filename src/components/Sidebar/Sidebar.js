import React from 'react'
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function Sidebar(){
    return (
        <div className="sidebar">
            <div className='sidebar-details'>
            <img src='/logo.jpg' alt='logo'/>
                <p>Dashboard</p>
                <p>Timesheet</p>
                <p>Leave</p>
                <p>Work From Home</p>
                <p>Feedback</p>
                <p>Survey</p>
                <p>Service Desk</p>
                <p>Forms</p>
                <p>Travel</p>
                <p>Expenses</p>
                <p>Resourcing</p>
            </div>
            <hr style={{marginTop:'6rem'}}></hr>
            <div className='logout'>
                <p>Nanda</p>
                <p><FontAwesomeIcon icon={faRightFromBracket} className='logout-btn' onClick={"#"}/></p>
            </div>
        </div>
    )
};

export default Sidebar; 