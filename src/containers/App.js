import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
// import Scroll from '../components/Scroll';
import './App.css';

import { setSearchField, requestRobots } from '../actions';

const App = () => {

    const dispatch = useDispatch()

    const { searchField } = useSelector((state) => state.searchRobots);

    const { robots, isPending, error } = useSelector(
        (state) => state.requestRobots
    )

    const onRequestRobots = () => {
        dispatch(requestRobots())
    }

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(users => setRobots(users));
    // }, []);

    useEffect(() => {
        onRequestRobots();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onSearchChange = (event) => {
        dispatch(setSearchField(event.target.value))
    };

    const filterdRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (isPending) {
        return <h1>Loading...</h1>
    }

    if (!error) {
        return (
            <div className="tc" >
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <CardList robots={filterdRobots} />

            </div>
        )

    }
    // return !robots.length ? (
    //     <h1>Loading...</h1>) :
    //     (
    //         <div className="tc" >
    //             <h1 className='f1'>RoboFriends</h1>
    //             <SearchBox searchChange={onSearchChange} />
    //             <CardList robots={filterdRobots} />

    //         </div>
    //     )
}

export default App;