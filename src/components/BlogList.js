import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const BlogList = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div>
            <button className="theme-switcher" onClick={toggleTheme}>
                {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
            <div className="blog-container">
                <div className="blog-card">
                    <img className="blog-image" src="https://source.unsplash.com/300x180/?tech" alt="Blog" />
                    <div className="blog-content">
                        <h2 className="blog-title">Latest Tech Trends</h2>
                        <p className="blog-description">
                            Stay updated with the newest trends in the world of technology...
                        </p>
                        <Link to="/blog" className="read-more">Read More</Link>
                    </div>
                </div>
                {/* Add more blog cards here */}
            </div>
        </div>
    );
};

export default BlogList;
