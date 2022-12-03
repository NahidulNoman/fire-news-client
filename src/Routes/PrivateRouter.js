import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const PrivateRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    // console.log(user)
    const location = useLocation();

    if(loading){
        return <Spinner animation="border" variant="success" />
    }

    if(user && user.uid){
        return children;
    }
    return  <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivateRouter;