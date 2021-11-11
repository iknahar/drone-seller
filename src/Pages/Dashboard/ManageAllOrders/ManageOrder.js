import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const { register, handleSubmit } = useForm();
    const [status, setStatus] = useState("");
    const [orderId, setOrderId] = useState("");

    useEffect(() => {
        fetch(`http://localhost:5000/allOrders`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    const handleOrderId = (id) => {
        setOrderId(id);
    };

    const onSubmit = (data) => {
        console.log(data, orderId);
        fetch(`http://localhost:5000/statusUpdate/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    };

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
            <h3 className="pt-3 text-center "><b>Manage</b> <span className="text-primary"><b>All Orders</b></span></h3>
            <p className="text-center ">You have {orders.length} orders</p>
            <div className="pt-3">
                <table className='table table-bordered table-hover'>
                    <thead>
                        <tr style={{ textAlign: 'center' }}>
                            <td className="p-3 bg-dark text-white font-weight-normal" style={{ width: '10vw' }}>Image</td>
                            <td className="p-3 bg-dark text-white font-weight-normal" style={{ width: '15vw' }}>Drone Name</td>
                            <td className="p-3 bg-dark text-white font-weight-normal" style={{ width: '15vw' }}>Customer</td>
                            <td className="p-3 bg-dark text-white font-weight-normal" style={{ width: '6vw' }}>Price</td>
                            <td className="p-3 bg-dark text-white font-weight-normal" style={{ width: '8vw' }}>Status</td>
                            <td className="p-3 bg-dark text-white font-weight-normal" style={{ width: '8vw' }}>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(od =>
                                <tr key={od._id} style={{ textAlign: 'center' }}>
                                    <td> <img className="w-50" src={od.image} alt="" /> </td>
                                    <td>{od.name}</td>
                                    <td>{od.displayName}</td>
                                    <td>{od.price}</td>
                                    <td><form onSubmit={handleSubmit(onSubmit)}>
                                        <select
                                            onClick={() => handleOrderId(od?._id)}
                                            {...register("status")}
                                        >
                                            <option value="Pending">Pending</option>
                                            <option value="Approve">Approve</option>
                                            <option value="Done">Done</option>
                                        </select>
                                        <input type="submit" />
                                    </form></td>
                                    <td>
                                        <Link style={{ width: '7vw' }} variant="danger" onClick={() => handleDelete(od._id)}
                                            className="btn btn-danger" >Delete</Link>
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

export default ManageOrders;