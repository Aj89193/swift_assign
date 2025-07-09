import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';




const Profiles = () => {
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState(null);

    const getProfile = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/2');
            setProfile(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching profile:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProfile();
    }, []);

    if (loading) return <div>Loading...</div>;

    if (!profile) return <div>No profile found</div>;

    return (
        <>
            <Navbar />
            <div className='d-flex justify-content-start align-items-center p-3'>
                <Link to="/comments"><FaArrowLeftLong /></Link>

                <h5 className="p-2">Welcome, {profile.name}</h5>
            </div>

            <div className="container mt-2">
                <div className="border-1 p-5 border-secondary shadow">
                    <div className='row'>
                    <div className="col-md-6">
                        <div className="d-flex flex-column justify-content-start">
                            <div className="d-flex flex-start">
                                <div className="rounded-circle bg-light p-3 m-1 fs-4" style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    EH
                                </div>
                                <div className="col-md-6">
                            <h4 className="mt-3">{profile.name}</h4>
                            <p>{profile.email}</p>
                        </div>
                            </div>
                        </div>
                    </div>
                    </div>


                    <div className='d-flex'>
                        <div className='row'>
                        

                        <div className="col-md-6 d-flex flex-column justify-content-center">
                            <label className='fw-bold text-dark form-label align-self-start' htmlFor='userName'>User ID:</label>
                            <input className="form-control-sm border-0 bg-light  text-dark fw-bold" id='userName' type='text' value={profile.id} readOnly />
                        </div>
                        <div className="col-md-6 d-flex flex-column justify-content-center">
                            <label className='fw-bold text-dark form-label align-self-start' htmlFor='nameInput'>Name:</label>
                            <input className="form-control-sm border-0 bg-light text-dark fw-bold" id='nameInput' type='text' value={profile.name} readOnly />
                        </div>
                        <div className="col-md-6 d-flex flex-column justify-content-center">
                            <label className='fw-bold text-dark form-label align-self-start' htmlFor='emailName'>Email ID:</label>
                            <input className="form-control-sm border-0 bg-light text-dark fw-bold" id='emailName' type='email' value={profile.email} readOnly />
                        </div>
                        <div className="col-md-6 d-flex flex-column justify-content-center">
                            <label className='fw-bold text-dark form-label align-self-start' htmlFor='addressInput'>Address:</label>
                            <input className="form-control-sm border-0 bg-light text-dark fw-bold " id='addressInput' type='text' value={(profile?.address?.street || '') + ' ' + (profile?.address?.suite || '') + ' ' + (profile?.address?.city || '') + ' ' + (profile?.address?.zipcode || '')} readOnly />
                        </div>
                        <div className="col-md-6 d-flex flex-column justify-content-center">
                            <label className='fw-bold text-dark form-label align-self-start' htmlFor='phoneName'>Mobile:</label>
                            <input className="form-control-sm border-0 bg-light text-dark fw-bold" id='phoneName' type='text' value={profile.phone} readOnly />
                        </div>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    );
}

export default Profiles;
