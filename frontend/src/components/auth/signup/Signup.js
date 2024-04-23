
import React, { useState } from 'react';
import axios from 'axios';
import './signup.css'; 

const Signup = () => {
    const [formData, setFormData] = useState({
        sname: '',
        semail: '',
        spassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8070/users/register', formData);
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error.response.data);
        }
    };

    return (
        <div className="signup-container">
            <h2 className="signup-header">Signup</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="sname" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-input"
                        id="sname"
                        name="sname"
                        value={formData.sname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="semail" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-input"
                        id="semail"
                        name="semail"
                        value={formData.semail}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="spassword" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-input"
                        id="spassword"
                        name="spassword"
                        value={formData.spassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
