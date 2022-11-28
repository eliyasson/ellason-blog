import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    //let name = 'eliyas';
    // const [name, setName] = useState('Lucy');
    // const [age, setAge] = useState(20);
    
    // const handleClick = () => {
    //     setName('Eliyas');
    //     setAge(30);
    // }
    const [blogs, setBlogs] =useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Eliyas', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Tara', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Eliyas', id: 3 }
    ])

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!"/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Eliyas')} title="Eliyas's blogs"/>
        </div>

     );
}
 
export default Home;