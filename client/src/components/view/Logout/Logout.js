import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../App';

const Logout = () => {
    const {state, dispatch} = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        const callLogoutPage = async () => {
            try{
                const res = await fetch('/logout', {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                });
    
                if(res.status === 200) {
                    dispatch({type: 'USER', payload: false})
                    navigate("/login");
                }
    
            } catch(error) {
                console.log(error);
            }
        }
        callLogoutPage();
    }, [navigate, dispatch]);
  return <div>Logout Page</div>;
};

export default Logout;
