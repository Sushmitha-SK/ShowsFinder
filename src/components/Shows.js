import React, { useEffect, useState } from 'react'
import '../styles/Shows.css'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';
import ShowItem from './ShowItem';
import axios from 'axios';
import { getAllShows } from '../api/getShowsApi';

const Shows = (props) => {
    const [shows, setShows] = useState([])

    const getAllShowDetails = async () => {
        const getShowData = await getAllShows()
        console.log(getShowData)
        setShows(getShowData.data)
    }

    useEffect(() => {
        getAllShowDetails()
    }, [])




    return (
        <>
            <div className='container-fluid showsTypeTitle'>
                <h1 className="text-center mt-2 topshows">Shows Finder - Top Shows</h1>

            </div>

            <div className="container">
                <div className="row" style={{ marginTop: '20rem' }}>
                    {console.log(Array.isArray(shows))}

                    {Array.isArray(shows) && shows.map((item, i) => (
                        <div key={i} className="col-md-4">
                            {/* <h2>averageRuntime: {item.show.averageRuntime}</h2>
                            <h2>genres: {item.show.genres}</h2>
                            <h2>image: {item.show.image.medium}</h2>
                            <h2>language: {item.show.language}</h2>
                            <h2>name: {item.show.name}</h2>
                            <h2>officialSite: {item.show.officialSite}</h2>
                            <h2>summary: {item.show.summary}</h2>
                            <h2>url:{item.show.url}</h2> */}

                            <ShowItem
                                id={item.show.id}
                                name={item.show.name ? item.show.name : ""}
                                summary={item.show.summary ? item.show.summary : ""}
                                imageUrl={item.show.image.medium}
                                url={item.show.url} />



                        </div>
                    ))}


                    {/* {Array.isArray(shows) && shows.map((item, index) => {
                        console.log('Item', item)
                        return (

                            <div className="col-md-4">

                                <label>{item.score}</label>
                            </div>
                        )
                    })} */}
                </div>
            </div>



            {/* {loading && <Spinner />} */}
            {/* <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            > */}
            {/* <div className="container">
                <div className="row" style={{ marginTop: '20rem' }}>
                    {shows.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <ShowItem title={element.name ? element.name : ""} description={element.summary ? element.summary : ""} imageUrl={element.image} newsUrl={element.url} author={element.officialSite} date={element.premiered} source={element.language} />
                        </div>
                    })}
                </div>
            </div> */}

            {/* </InfiniteScroll> */}
        </>
    )
}

export default Shows