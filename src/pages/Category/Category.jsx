import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowNewsCart from '../Shared/ShowNewsCart/ShowNewsCart';

const Category = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h2>this is category line up. {allNews.length}</h2>
            {
                allNews.map(news => <ShowNewsCart
                key={news._id}
                news={news}
                ></ShowNewsCart>)
            }
        </div>
    );
};

export default Category;