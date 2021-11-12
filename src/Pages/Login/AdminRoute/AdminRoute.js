import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import { Spinner } from "react-bootstrap";

const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    const [isAdmin, setIsAdmin] = useState(true);

    useEffect(() => {
        fetch(`https://fast-earth-44959.herokuapp.com/checkAdmin/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data[0]?.role === "admin") {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            });
    }, []);

    if (isLoading) { return <Spinner animation="grow" /> }
    console.log(isAdmin)
    return (

        <Route
            {...rest}
            render={({ location }) =>
                isAdmin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;