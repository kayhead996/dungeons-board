import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div>
        <h1>Dungeons and Dragons Board</h1>
        <ul>
            <li><Link to='/host'>Host a server</Link></li>
            <li><Link to='/join'>Join a server</Link></li>
        </ul>
    </div>
);

export default Home;
