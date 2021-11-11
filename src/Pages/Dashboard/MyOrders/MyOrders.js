import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";


const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myOrder/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [orders, user?.email]);



    function handleDelete(id) {
        const confirmation = window.confirm("Are you sure to delete!!");
        if (confirmation) {
            fetch(`http://localhost:5000/delete/${id}`, {
                method: "delete",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount === 1) {
                        const remainingOrders = orders.filter((order) => order._id !== id);
                        setOrders(remainingOrders);
                    } else {
                        alert("Something went wrong!!");
                    }
                });
        }
    }

    return (
        <div className="col-md-10">
            <h3 className="pt-3 text-center "><b>Your</b> <span className="text-primary"><b>Orders</b></span></h3>
            <p className="text-center ">You have {orders.length} orders</p>
            <div className="pt-3">
                <table className='table table-bordered table-hover'>
                <thead>
                    <tr style={{ textAlign: 'center' }}>
                        <td className="p-3 bg-dark text-white font-weight-normal" style={{ width: '10vw' }}>Image</td>
                        <td className="p-3 bg-dark text-white font-weight-normal" style={{ width: '15vw' }}>Drone Name</td>
                        <td className="p-3 bg-dark text-white font-weight-normal" style={{ width: '6vw' }}>Price</td>
                        <td className="p-3 bg-dark text-white font-weight-normal" style={{ width: '8vw' }}>Status</td>
                        <td className="p-3 bg-dark text-white font-weight-normal" style={{ width: '8vw' }}>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(od =>
                            <tr key={od._id} style={{ textAlign: 'center' }} >
                                <td className="p-2 m-1"><img className="w-50" src={od.image} alt="" /> </td>
                                <td className="p-2 m-1">{od.name}</td>
                                <td className="p-2 m-1">{od.price}</td>
                                <td className="p-2 m-1">{od.status}</td>
                                <td className="p-2 m-1">
                                    <Button style={{ width: '7vw' }} variant="danger" onClick={() => handleDelete(od._id)}
                                        className="btn btn-danger" >Delete</Button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;