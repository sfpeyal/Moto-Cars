import React, { useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../../Hooks/useAuth';
import './Login.css'








const Login = () => {

    const [loginData, setLoginData] = useState({})
    const { user, loginUser, isLoading } = useAuth();
    const history = useHistory();
    const location = useLocation();


    const onHandleChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
        console.log(loginData);


    }


    const handleLogInSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }


    return (
        <div className="login-container">
            <Container>
                <h1 className="py-5">Login</h1>
                {!isLoading &&
                    <form onSubmit={handleLogInSubmit}>
                        <div className="mb-3">
                            <input type="email" onChange={onHandleChange} className="form-control" id="formGroupExampleInput" placeholder="Email" name="email" />
                        </div>
                        <div className="mb-3">
                            <input type="password" onChange={onHandleChange} className="form-control" id="formGroupExampleInput2" placeholder="Password" name="password" />
                        </div>
                        <button type="submit">Login</button>
                    </form>}
                {isLoading && <Spinner animation="border" variant="dark" />}

            </Container>
        </div>
    );
};

export default Login;