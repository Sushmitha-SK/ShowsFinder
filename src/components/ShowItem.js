import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getShowByID } from '../api/getShowsApi';
import { useEffect } from 'react';

const ShowItem = (props) => {
    let { id, name, summary, imageUrl, url } = props;

    const [showData, setShowData] = useState([])

    const getShowDatabyID = async () => {
        const getDatabyID = await getShowByID({ id })
        console.log(getDatabyID)
        setShowData(getDatabyID)
    }

    useEffect(() => {
        getShowDatabyID()
    }, [id])



    const navigate = useNavigate();

    const handleShowData = () => {
        navigate(`/showdetails?id=${id}`)

    }

    return (
        <>
            <div className="my-3">
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }>
                        {/* <span className="badge rounded-pill bg-danger"> {source} </span> */}
                    </div>
                    <img src={!imageUrl ? "https://images.pexels.com/photos/5202954/pexels-photo-5202954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        {/* <h5 className="card-title">{showData.show.name}  </h5> */}
                        <p className="card-text">{summary}</p>
                        {/* <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p> */}
                        <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>&nbsp;
                        <button onClick={handleShowData} className="btn btn-sm btn-dark">View Details</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowItem