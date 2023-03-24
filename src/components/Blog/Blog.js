import React from 'react';

const Blog = (props) => {
    return (
        <div style={{border: '2px solid blue', margin:'20px', padding:'20px'}}>
            <h2>Name: {props.name}</h2>
            <h2>Author: {props.author}</h2>
        </div>
    );
};

export default Blog;