import React from 'react';
import './Team.css'

const Team = (props) => {
    const {team} = props
    // console.log(team.length);
    const totalDoctor = team.length ? team.length : 0;

    const totalDocReducer = (previous, doctor) => previous + doctor.salary;
    const totalSalary = team.reduce(totalDocReducer, 0);

    return (
        <div className="text-center">
            <h3>Emergency Team</h3>
            <h5>Total Doctor: {totalDoctor}</h5>
            <h5>Total Salary: {totalSalary}</h5>
            <ul className="list-group text-start">
                {
                    team.map(doc => <li className="list-group-item ps-5" key={doc.key}>
                        <img className="doc-img" src={doc.img} alt="" /> 
                        <span className="ms-2 fw-bold">{doc.name}</span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Team;