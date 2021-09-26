import React from 'react';
import './Doctor.css'

const Doctor = (props) => {
    const { name, speciality, degree, img, salary } = props.doctor
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top doctor-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title doctor-name">{name}</h5>
                    <p className="card-text"><b>Speciality: </b> <span className="fst-italic">{speciality}</span></p>
                    <p className="card-text text-secondary"><b>Degree: </b>{degree}</p>
                    {/* <p className="card-text fs-5"><b>Salary: </b>{salary}$</p> */}
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                    <div className="card-text doctor-salary"><b>Salary: </b>${salary}</div>
                    <button 
                        onClick={() => props.handleAddToTeam(props.doctor)}
                        className="btn add-to-team-btn"
                    ><i className="fas fa-user-plus"></i> Add To Team </button>
                </div>
            </div>
        </div>
    );
};

export default Doctor;