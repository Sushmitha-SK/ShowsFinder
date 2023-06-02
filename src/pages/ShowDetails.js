// import React, { useState, useEffect } from 'react'
// import Navbar from '../components/Navbar'
// import { useParams } from 'react-router-dom'
// import { getParamsByName } from './../utils/helper';
// import BookTicket from '../components/BookTicket';


// const ShowDetails = (props) => {
//     const [openBookTicketModal, setOpenBookTicketModal] = useState(false);
//     const [showData, setShowData] = useState("");
//     const [localData, setLocalData] = useState([])

//     // const name = getParamsByName("name");
//     // const summary = getParamsByName("summary");
//     // const url = getParamsByName("url");
//     // const imageUrl = getParamsByName("imageURL");


//     const getData = () => {
//         const name = localStorage.getItem("name");
//         const summary = localStorage.getItem("summary");
//         const url = localStorage.getItem("url");
//         const imageUrl = localStorage.getItem("imageURL");
//         setLocalData(name, summary, url, imageUrl)
//         console.log(localData)

//     }
//     useEffect(() => {
//         getData()
//     }, [])



//     const handleCloseViewModal = () => setOpenBookTicketModal(false);

//     const handleBookTicket = (data) => {
//         setOpenBookTicketModal(true);
//         setShowData(data);
//     };


//     return (
//         <>
//             <Navbar />
//             <div className="card mb-3" style={{ maxWidth: 1024 }}>
//                 <div className="row g-0">
//                     <div className="col-md-4">
//                         <img src={localData[3]} className="img-fluid rounded-start" alt="..." />
//                     </div>
//                     <div className="col-md-8">
//                         <div className="card-body">
//                             <h5 className="card-title">{localData[0]}</h5>
//                             <p className="card-text">{localData[1]}</p>
//                             {/* <button onClick={handleBookTicket} className="btn btn-primary">Book Ticket</button> */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <BookTicket
//                 openViewModal={openBookTicketModal}
//                 handleCloseViewModal={handleCloseViewModal}
//                 maxWidth={false}
//                 summary={localData[1]}
//                 showname={localData[0]}
//             />

//         </>
//     )
// }

// export default ShowDetails

import React from 'react'
import { getParamsByName } from './../utils/helper';
import Navbar from '../components/Navbar';
import { getShowByID } from '../api/getShowsApi';
import { useState } from 'react';
import { useEffect } from 'react';


const ShowDetails = () => {
    const id = getParamsByName("id");
    console.log('ID', id)

    const [showData, setShowData] = useState([])



    useEffect(() => {
        const getShowDatabyID = async () => {
            const getDatabyID = await getShowByID({ id })
            console.log('Console', getDatabyID)
            setShowData(getDatabyID)
            console.log('DATA', showData.data)
        }
        getShowDatabyID()
    }, [id])



    return (
        <>
            <Navbar />
            <div className="card mb-3" style={{ maxWidth: 1024 }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={showData.data.image.medium} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{showData.data.name}</h5>
                            <p className="card-text">{showData.data.summary}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowDetails