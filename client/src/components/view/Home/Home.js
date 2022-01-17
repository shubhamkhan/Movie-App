import React from 'react';
import Banner from '../Banner/Banner';
import Row from '../Row/Row';
import api from '../../../service/api';

const Home = () => {
    return (
        <>
            <Banner />
            <div className='row pt-5 container-fluid'>
                <Row
                    title="ORIGINALS"
                    id="NO"
                    fetchUrl={api.originals}
                    isLargeRow
                />
                <Row
                    title="Trending Now"
                    id="TN"
                    fetchUrl={api.trending}
                />
                <Row
                    title="Top Rated"
                    id="TR"
                    fetchUrl={api.topRated}
                />
                <Row
                    title="Action Movies"
                    id="AM"
                    fetchUrl={api.action}
                />
                <Row
                    title="Comedy Movies"
                    id="CM"
                    fetchUrl={api.comedy}
                />
                <Row
                    title="Horror Movies"
                    id="HM"
                    fetchUrl={api.horror}
                />
                <Row
                    title="Romance  Movies"
                    id="RM"
                    fetchUrl={api.romance}
                />
                <Row
                    title="Documentaries"
                    id="DM"
                    fetchUrl={api.documentaries}
                />
            </div>
        </>
    )
}

export default Home
