import React, { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
// import Scroll from '../components/Scroll';
import './App.css';


const App = () => {

    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
    }, []);

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    };

    const filterdRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ?
        <h1>Loading...</h1> :
        (
            <div className="tc" >
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <CardList robots={filterdRobots} />

            </div>
        )
}

export default App;