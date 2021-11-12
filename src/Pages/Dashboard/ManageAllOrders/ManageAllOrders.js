import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";


const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const { register, handleSubmit } = useForm();
    const [orderId, setOrderId] = useState("");
    const [status, setStatus] = useState("");
    const [reload, setReload] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/allOrders`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [[reload]]);

    const handleOrderId = (id) => {
        setOrderId(id);
    };

    const onSubmit = (data) => {
        fetch(`http://localhost:5000/statusUpdate/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (data.modifiedCount === 1) {
                    setReload(!reload);
                  } else {
                    alert("Status Changed To Shipped!!");
                  }
            });

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
                            <td className="p-3 bg-dark text-white font-weight-normal" style={{ width: '8vw' }}>Image</td>
                            <td className="p-3 bg-dark text-white font-weight-normal" style={{ width: '12vw' }}>Drone Name</td>
                            <td className="p-3 bg-dark text-white font-weight-normal" style={{ width: '12vw' }}>Customer</td>
                            <td className="p-3 bg-dark text-white font-weight-normal" style={{ width: '6vw' }}>Price</td>
                            <td className="p-3 bg-dark text-white font-weight-normal" style={{ width: '25vw' }}>Status</td>
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
                                    <td>{od.status}
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <input
                                                onClick={() => handleOrderId(od?._id)}
                                                {...register("status")}
                                                type="submit"
                                                value="Shipped"
                                                className="mt-2 btn btn-outline-primary ms-1 btn-sm" />
                                        </form>

                                    </td>
                                    <td>
                                        <Button style={{ width: '7vw' }} onClick={() => handleDelete(od._id)}
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

export default ManageAllOrders;