import React from 'react';
import './Team.css'

const Team = (props) => {
    const {team} = props
    // console.log(team.length);
    const totalDoctor = team.length ? team.length : 0;

    const totalDocReducer = (previous, doctor) => previous + doctor.salary;
    const totalSalary = team.reduce(totalDocReducer, 0);

    return (
        <div className="text-center border shadow-lg sticky-top">
            <div className="team-container">
                <h3>Emergency Team</h3>
                <h5>Total Doctor: <span className="fw-normal">{totalDoctor}</span></h5>
                <h5>Total Cost: <span className="fw-normal">${totalSalary}</span></h5>
            </div>
            <ul className="list-group text-start">
                {/* Whether list is empty or not */}
                {team.length ? (
                    team.map(doc => <li className="list-group-item ps-5" key={doc.key}>
                        <img className="doc-img" src={doc.img} alt="" />
                        <span className="text-secondary ms-2 fw-bold">{doc.name}</span>
                    </li>)
                ): (
                    <li className="list-group-item text-center text-secondary">List Is Empty</li>
                )
                    
                }
            </ul>
        </div>
    );
};

export default Team;