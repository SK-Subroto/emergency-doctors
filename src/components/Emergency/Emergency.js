import React, { useState, useEffect } from 'react';
import Doctor from '../Doctor/Doctor';
import Team from '../Team/Team';

const Emergency = () => {
    const [doctors, setDoctors] = useState([]);
    const [team, setTeam] = useState([]);

    useEffect(() => {
        fetch('./doctors.JSON')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, []);

    const handleAddToTeam = (doctor) => {
        const teamDoctor = team.find(doc => doc.key === doctor.key);
        // console.log(teamDoctor);
        if (!teamDoctor){
            const newTeam = [...team, doctor];
            setTeam(newTeam);
        }
    }

    return (
        <div className="row">
            <div className="col-9">
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.key}
                            doctor={doctor}
                            handleAddToTeam={handleAddToTeam}
                        />)
                    }
                </div>
            </div>
            <div className="col-3">
                <Team team={team} />
            </div>
        </div>
    );
};

export default Emergency;