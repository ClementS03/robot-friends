import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
// import Scroll from '../components/Scroll';
import './App.css';

import { setSearchField } from '../actions';

const App = () => {

    const [robots, setRobots] = useState([]);

    const dispatch = useDispatch()

    const { searchField } = useSelector((state) => state);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
    }, []);

    const onSearchChange = (event) => {
        dispatch(setSearchField(event.target.value))
    };

    const filterdRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ? (
        <h1>Loading...</h1>) :
        (
            <div className="tc" >
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <CardList robots={filterdRobots} />

            </div>
        )
}

export default App;