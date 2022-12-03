import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/UserContext";

const SignUp = () => {
    const [accept,setAccept] = useState(false);
    const [error , setError] = useState('');

    const {createUser,updateUserProfile,emailVerify,setLoading} = useContext(AuthContext);

    const navigate = useNavigate();

    const handlerSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        // console.log(name,email,password)

        createUser(email,password)
        .then( result => {
            // const user = result.user
            // console.log(user)
            setError('');
           
                handlerUpdateProfile(name,photoURL)
                handlerVerify();
                toast.success('Successfully SignUp!')
                navigate('/')
          
        })
        .catch(e => {
            console.log(e)
            const er = e.message;
            setError(er);
        })
        // .finally( () => {
        //   setLoading(false);
        // })
    }
    const handlerVerify = () => {
        emailVerify()
        .then( () => {
            toast.success('check your email for verify!!')
        })
        .catch(e=>console.log(e))
    }
    const handlerUpdateProfile = (name,photoURL) => {
      console.log(name,photoURL)
        const profile = {
            displayName : name,
            photoURL : photoURL
        }
        updateUserProfile(profile)
        .then( () => {
            // const user = result.user
            // console.log(user)
        })
        .catch(e=>console.log(e))
    }
    const handlerCheck = (e) => {
        // setAccept(e.target.checked)
        setAccept(!accept)
    }

  return (
    <Form onSubmit={handlerSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your PhotoURL</Form.Label>
        <Form.Control name="photoURL" type="text" placeholder="photo url" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check onClick={handlerCheck} type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accept}>
        Sign Up
      </Button>
      <div className="text-danger mt-4">
        {error}
      </div>
    </Form>
  );
};

export default SignUp;
