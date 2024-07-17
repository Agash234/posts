import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
        <h2>About Page</h2>
        <p>This is the about page of our react app.</p>
        <p>
            check out this intresting post:<Link to={`/posts/1`}>Post1</Link>
        </p>
    </div>
  );
};

export default About;