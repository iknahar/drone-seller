import React, { useEffect, useState } from "react";
import StarRatingComponent from 'react-star-rating-component';
import star from '../../images/star.png'
import bg2 from '../../images/bg2.jpg'


const ShowReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/addSReview")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);




    return (
        <div style={{
            background: `url(${bg2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            
          }} className="text-center p-3 mt-5 border-top">
            <h3 className="text-center p-3"><b>Customer</b> <span className="text-primary"><b>Review</b></span></h3>
            <div className="row container-fluid mx-auto">
                {reviews?.map((rv) => (
                    <div className="col-md-6 col-lg-4" >
                        <div className="m-4 p-4 border border-light rounded shadow-lg bg-white rounded" style={{ width: '360px' }}>
                            <div>
                            <p className="fs-5 mt-2 text-center overflow-hidden" style={{ height: '120px' }}><i>{rv.comments}</i></p>
                            <p className="text-primary fs-6 mt-2 fw-bold text-center">💬{rv.displayName}</p>
                            </div>
                            <div className="d-flex align-items-center ms-5">
                            <span>Rating :  </span>
                            <StarRatingComponent
                                name="rate"
                                editing={false}
                                renderStarIcon={() => <span>  <img className="d-inline" src={star} alt="" /></span>}
                                starCount={rv.rating}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShowReview;