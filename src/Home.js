import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
   const [blogs, setBlogs] =useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setBlogs(data);
        })
        
    }, []);

    return ( 
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
            
        </div>

     );
}
 
export default Home;