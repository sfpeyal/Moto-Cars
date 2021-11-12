import React, { useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../../../Hooks/useAuth';
import './Register.css'

const Register = () => {

    const [registerData, setRegisterData] = useState({});
    const history = useHistory();
    const { registerUser, isLoading } = useAuth();


    const onHandleChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData)
        console.log(newRegisterData);


    }


    const handleLogInSubmit = e => {
        registerUser(registerData.email, registerData.password, registerData.name, history)
        e.preventDefault();

    }



    return (
        <div className="register-container">
            <Container>
                <h1 className="py-5">Register Here</h1>
                {!isLoading &&
                    <form onSubmit={handleLogInSubmit}>
                        <div className="mb-3">
                            <input type="text" onBlur={onHandleChange} className="form-control" id="formGroupExampleInput" placeholder="Your Name" name="name" />
                        </div>
                        <div className="mb-3">
                            <input type="email" onBlur={onHandleChange} className="form-control" id="formGroupExampleInput" placeholder="Your Email" name="email" />
                        </div>
                        <div className="mb-3">
                            <input type="password" onBlur={onHandleChange} className="form-control" id="formGroupExampleInput2" placeholder="Password" name="password" />
                        </div>
                        <button type="submit">Register</button>
                    </form>}
                {isLoading && <Spinner animation="border" variant="dark" />}
            </Container>
        </div>
    );
};

export default Register;