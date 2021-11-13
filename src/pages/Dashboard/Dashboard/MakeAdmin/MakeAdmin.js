import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import './MakeAdmin.css'

const MakeAdmin = () => {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)

  const handleOnBlur = e => {
    setEmail(e.target.value)
  }


  const handleAdminSubmit = e => {
    const user = { email }
    fetch("https://blooming-refuge-66854.herokuapp.com/users", {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          console.log(data)
          setSuccess(true);
        }
      })
    e.preventDefault();
  }
  return (
    <Container className="makeAdmin-container">
      <h2>Make an Admin</h2>
      <form onSubmit={handleAdminSubmit}>

        <div className="mb-3  d-flex justify-content-center">
          <div>
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              onBlur={handleOnBlur}
              type="email"
              className="form-control w-100"
            />
          </div>
        </div>
        <Button type="submit" className="btn btn-danger">
          Make Admin
        </Button>


      </form>
      {success && (
        <div className="alert alert-primary d-block w-50" role="alert">
          Admin Made Successfully!!
        </div>
      )}
    </Container>
  );
};

export default MakeAdmin;