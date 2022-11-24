import { useState } from "react";

const Home = () => {
    //let name = 'eliyas';
    const [name, setName] = useState('Lucy');
    const [age, setAge] = useState(20);
    
    const handleClick = () => {
        setName('Eliyas');
        setAge(30);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name} is {age} years old.</p>
            <button onClick={handleClick}>Click me</button>

        </div>

     );
}
 
export default Home;