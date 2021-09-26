import React, { useState, useEffect } from 'react';
import Doctor from '../Doctor/Doctor';
import Team from '../Team/Team';

const Emergency = () => {
    //handle state
    const [doctors, setDoctors] = useState([]);
    const [team, setTeam] = useState([]);

    // fetch data 
    useEffect(() => {
        fetch('./doctors.JSON')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, []);

    const handleAddToTeam = (doctor) => {
        const teamDoctor = team.find(doc => doc.key === doctor.key);
        // restrict from adding same person mutiple time
        if (!teamDoctor){
            const newTeam = [...team, doctor];
            setTeam(newTeam);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-9 order-1 order-md-0">
                    <div className="row row-cols-1 row-cols-lg-3 g-4">
                        {/* looping doctors */}
                        {
                            doctors.map(doctor => <Doctor
                                key={doctor.key}
                                doctor={doctor}
                                handleAddToTeam={handleAddToTeam}
                            />)
                        }
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 order-0 order-md-1">
                    <Team team={team} />
                </div>
            </div>
        </div>
    );
};

export default Emergency;