import React from 'react';
import { para } from '../Utility/shortPara';


const Blog = ({ blog }) => {
    const {blogHeading, blogImg, blogId, blogBody} = blog;
    // console.log(blogBody);
    // para(blogBody);
      
    return (
        <div className='w-2/3 mx-auto'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={blogImg}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{blogHeading}</h2>
                    <p>{para(blogBody) }</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;