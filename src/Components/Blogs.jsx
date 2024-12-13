import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import Blog from './Blog';

const Blogs = () => {
    const blogs = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>GadgetHeaven | Blogs</title>
            </Helmet>
            <div className='space-y-5'>
                {
                    blogs.map(blog => <Blog key={blog.blogId} blog={blog}></Blog>)
                }

            </div>


        </div>
    );
};

export default Blogs;