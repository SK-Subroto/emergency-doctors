import React from 'react';
import './Doctor.css'

const Doctor = (props) => {
    const { name, specialty, degree, img, salary } = props.doctor
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top doctor-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{specialty}</p>
                    <p className="card-text">{degree}</p>
                    <p className="card-text">{salary}</p>
                </div>
                <div className="card-footer">
                    <button 
                        onClick={() => props.handleAddToTeam(props.doctor)}
                        className="btn btn-primary float-end"
                    ><i className="fas fa-user-plus"></i> Add To Team </button>
                </div>
            </div>
        </div>
    );
};

export default Doctor;