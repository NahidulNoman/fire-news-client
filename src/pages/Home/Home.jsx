import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowNewsCart from '../Shared/ShowNewsCart/ShowNewsCart';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h2>all fire News Home: {allNews.length}</h2>
            {
                allNews.map(news => <ShowNewsCart
                    key={news._id}
                    news={news}
                ></ShowNewsCart>)
            }
        </div>
    );
};

export default Home;