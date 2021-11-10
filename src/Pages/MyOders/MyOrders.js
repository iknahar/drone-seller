import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myOrder/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [orders]);

    return (
        <div className="col-md-10">
            <h5 className="pt-3">Your Orders. You have {orders.length} orders</h5>
            <div className="pt-3">

                <thead>
                    <tr style={{ textAlign: 'center' }}>
                    <th style={{ width: '10vw' }}>Product Image</th>
                        <th style={{ width: '15vw' }}>Drone Name</th>
                        <th style={{ width: '10vw' }}>Price</th>   
                        <th style={{ width: '14vw' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(od =>
                            <tr key={od._id} style={{ textAlign: 'center' }}>
                                <td> <img className="w-25" src={od.image} alt=""/> </td>
                                <td>{od.name}</td>
                                <td>{od.price}</td>
                                <td>
                                    <Button style={{ width: '7vw' }} variant="danger">Delete</Button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>

            </div>
        </div>
    );
};

export default MyOrders;