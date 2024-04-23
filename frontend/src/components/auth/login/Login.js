import React, { useState } from 'react';
import "./Login.css";

const Login = () => {
    const [formData, setFormData] = useState({
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
            
            const response = await fetch('http://localhost:8070/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Login failed');
            }
            const result = await response.json();
            localStorage.setItem("token",result.token);
            console.log(result);
            window.location.href = 'http://localhost:3000/user-list';
            console.log('Login successful');
        } catch (error) {
            console.error('Login error:', error.message);
           
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="semail" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="semail"
                        name="semail"
                        value={formData.semail}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="spassword" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="spassword"
                        name="spassword"
                        value={formData.spassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;
