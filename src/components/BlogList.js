import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const BlogList = () => {
   
    const blogPosts = [
        {
            title: "Latest Tech Trends",
            description: "Stay updated with the newest trends in the world of technology...",
            image: "https://source.unsplash.com/300x180/?tech",
            link: "/blog/1"
        },
        {
            title: "Web Development Tips",
            description: "Improve your web dev workflow with these essential tips...",
            image: "https://source.unsplash.com/300x180/?code",
            link: "/blog/2"
        },
        {
            title: "AI and the Future",
            description: "Discover how AI is shaping our future in various industries...",
            image: "https://source.unsplash.com/300x180/?ai",
            link: "/blog/3"
        },
        {
            title: "Productivity Hacks for Developers",
            description: "Maximize your efficiency with these time-saving hacks...",
            image: "https://source.unsplash.com/300x180/?productivity",
            link: "/blog/4"
        }
    ];

    return (
        <div>
            {/* Ad placement */}
            <div className="ad-section">
                {/* You can embed Google AdSense, or use a placeholder image/component */}
                <img src="https://via.placeholder.com/728x90?text=Advertisement" alt="Ad Banner" />
            </div>

            <div className="blog-container">
                {blogPosts.map((post, index) => (
                    <div key={index} className="blog-card">
                        <img className="blog-image" src={post.image} alt="Blog" />
                        <div className="blog-content">
                            <h2 className="blog-title">{post.title}</h2>
                            <p className="blog-description">{post.description}</p>
                            <Link to={post.link} className="read-more">Read More</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
